import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

function getTaglineVariants(variant?: string) {
  const baseClasses =
    "flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0"

  const variants: Record<string, string> = {
    default: "bg-background border shadow-xs px-2.5 rounded-md h-7",
    ghost: "bg-transparent text-muted-foreground",
    white: "text-white",
  }

  return cn(baseClasses, variants[variant || "default"])
}

interface TaglineProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  asChild?: boolean
}

function Tagline({ className, variant, asChild = false, children, ...props }: TaglineProps) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp className={cn(getTaglineVariants(variant), className)} {...props}>
      {children}
    </Comp>
  )
}

export { Tagline }
