import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    fullWidth?: boolean;
}

export default function Section({
    children,
    className,
    containerClassName,
    fullWidth = false,
    ...props
}: SectionProps) {
    return (
        <section className={cn("py-16 md:py-24", className)} {...props}>
            <div
                className={cn(
                    "mx-auto px-4 sm:px-6 lg:px-8",
                    fullWidth ? "w-full max-w-none px-0" : "max-w-7xl",
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
