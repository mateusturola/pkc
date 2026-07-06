/* eslint-disable @next/next/no-img-element */
type Props = {
  className?: string;
  priority?: boolean;
};

/** Logo oficial PAZ Kids Conference 2027 (wordmark gradiente, PNG em /public). */
export default function Logo({ className, priority }: Props) {
  return (
    <img
      src="/logo.webp"
      alt="PAZ Kids Conference 2027 · Barueri"
      width={1332}
      height={549}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
