import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full px-12 py-6 text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-300 border",
                variant === "primary" && "bg-primary border-color-gold text-black hover:bg-transparent hover:text-primary",
                variant === "outline" && "bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
