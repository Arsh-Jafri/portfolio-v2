import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "link"
  size?: "default" | "sm"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(
          "inline-flex items-center justify-center rounded-md text-sm font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "link" && "text-accent underline-offset-4 hover:underline",
          size === "sm" && "h-9 px-3",
          size === "default" && "h-10 py-2 px-4",
          className
        ),
        ...props,
      })
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "link" && "text-accent underline-offset-4 hover:underline",
          size === "sm" && "h-9 px-3",
          size === "default" && "h-10 py-2 px-4",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }

