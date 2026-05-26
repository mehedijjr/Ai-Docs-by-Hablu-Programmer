import { cn } from "../lib/utils/cn";

export const Button = ({ children, className }) => {
  return (
    <button className={cn(`py-3 sm:py-4 px-4 sm:px-6 bg-linear-to-r from-primary to-secondary text-white font-bold text-[16px] rounded-full shadow-md cursor-pointer opacity-90 hover:opacity-100 transition-all duration-150 text-xs md:text-base`, className)}>
      {children}
    </button>
  );
};
