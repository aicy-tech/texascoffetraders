import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-brand-pink-600 bg-brand-pink-100 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-near-black leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  );
}
