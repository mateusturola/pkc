"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/data";

/**
 * Retorna se o lote promocional ainda está ativo (antes do fim em
 * EVENT.promoDeadlineISO). Começa em `true` (realidade atual) para não dar
 * mismatch de hidratação e corrige no cliente caso a data já tenha passado.
 */
export default function usePromoActive() {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(Date.now() <= new Date(EVENT.promoDeadlineISO).getTime());
  }, []);
  return active;
}
