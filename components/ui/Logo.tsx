/* eslint-disable @next/next/no-img-element */
type Props = {
  className?: string;
  priority?: boolean;
};

/** Official PazKids Conference 27 logo (trimmed, transparent PNG in /public). */
export default function Logo({ className, priority }: Props) {
  return (
    <img
      src="/logo.png"
      alt="PAZ Kids Conference 27 · Barueri"
      width={1175}
      height={439}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
