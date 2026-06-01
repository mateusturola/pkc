"use client";

type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-6 font-display text-lg font-semibold tracking-wide sm:text-2xl">
              {item}
            </span>
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-current opacity-70"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
