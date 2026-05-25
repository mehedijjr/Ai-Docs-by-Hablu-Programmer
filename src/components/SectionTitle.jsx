import { cn } from "../lib/utils/cn"
import { TextGradients } from "./TextGradients"


export const SectionTitle = ({ children, className, gradient }) => {
  return (
    <h1 className={cn(`font-primary font-bold text-2xl md:text-[35px] lg:text-[46px] md:leading-11.25 lg:leading-[58.7px]`, className)}>
      {children} <TextGradients>{gradient}</TextGradients>
    </h1>
  )
}
