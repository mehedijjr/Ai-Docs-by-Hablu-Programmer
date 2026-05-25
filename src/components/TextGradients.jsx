import { cn } from "../lib/utils/cn"


export const TextGradients = ({children, className}) => {
  return (
    <span className={cn("bg-linear-to-b from-primary to-secondary bg-clip-text text-transparent", className)}>
        {children}
    </span>
  )
}
