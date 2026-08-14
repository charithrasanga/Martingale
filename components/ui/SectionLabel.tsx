import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  rule = "none",
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  rule?: "right" | "below" | "none";
  tone?: "gold" | "white";
  className?: string;
}) {
  const color = tone === "white" ? "text-white" : "text-gold";
  const line = tone === "white" ? "bg-white/70" : "bg-gold";

  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-4",
        rule === "below" && "flex-col items-center gap-3",
        className,
      )}
    >
      <p
        className={cn(
          "text-[13px] font-medium uppercase tracking-[0.2em]",
          color,
        )}
      >
        {children}
      </p>
      {rule === "right" ? <span className={cn("h-px w-10", line)} /> : null}
      {rule === "below" ? <span className={cn("h-px w-10", line)} /> : null}
    </div>
  );
}
