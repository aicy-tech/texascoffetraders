import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-pink-500 text-white hover:bg-brand-pink-600 shadow-md hover:shadow-lg",
      secondary: "bg-near-black text-white hover:bg-gray-800",
      outline: "bg-transparent border-2 border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50",
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-pink-500 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none font-medium",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
