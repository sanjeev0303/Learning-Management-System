import { cn } from '@/lib/utils'
import React from 'react'

type GradientTextProps = {
    element?: "H1" | "H2"
    children: React.ReactNode
    className?: string
}

const GradientText = ({ children, element, className }: GradientTextProps) => {
  switch (element) {
    case "H1":
        return(
            <h1 className={cn(className, "text-gradient")}>{children}</h1>
        )
        break;

    case "H2":
        return(
            <h2 className={cn(className, "text-gradient")}>{children}</h2>
        )
        break;

    default:
        return <p className={cn(className, "text-gradient")}>{children}</p>
  }
}

export default GradientText
