import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  title: string;
  letter: string;
  className?: string;
}

export default function SectionHeader({ title, letter, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-6 mb-24", className)}>
      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold tracking-widest text-white/40 uppercase">
        {letter}
      </div>
      <div className="relative flex-1 h-px bg-white/10">
        <span className="absolute top-4 left-0 text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-white uppercase">
          {title}
        </span>
      </div>
    </div>
  );
}
