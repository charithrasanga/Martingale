import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-12",
        narrow ? "max-w-[720px]" : "max-w-[1280px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
