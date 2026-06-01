"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "high" | "low" | "off";

/**
 * Decides how much 3D the device can comfortably render.
 * - "high": full scene (desktop / capable devices)
 * - "low":  reduced scene (mobile / mid-range)
 * - "off":  no WebGL scene at all (reduced-motion, no WebGL, very weak device)
 *
 * Returns "high" during SSR/first paint to avoid layout shift, then refines
 * on the client after mount.
 */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("high");

  useEffect(() => {
    const decide = (): DeviceTier => {
      // Respect the OS-level "reduce motion" setting.
      if (
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      ) {
        return "off";
      }

      // Bail out if WebGL isn't available.
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl2") || canvas.getContext("webgl");
        if (!gl) return "off";
      } catch {
        return "off";
      }

      const cores = navigator.hardwareConcurrency ?? 4;
      const memory = (navigator as Navigator & { deviceMemory?: number })
        .deviceMemory;
      const coarse = window.matchMedia?.("(pointer: coarse)").matches;
      const narrow = window.innerWidth < 768;

      // Very weak devices: drop 3D entirely.
      if (cores <= 2 || (memory !== undefined && memory <= 2)) {
        return "off";
      }

      // Touch / small screens get the reduced scene.
      if (coarse || narrow) return "low";

      return "high";
    };

    setTier(decide());

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setTier(decide());
    mq.addEventListener?.("change", onChange);
    window.addEventListener("resize", onChange);
    return () => {
      mq.removeEventListener?.("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return tier;
}
