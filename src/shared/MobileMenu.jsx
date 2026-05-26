import { navItems } from "../lib/utils/db/data"
import { Logo } from "./Logo"


export const MobileMenu = ({toggleMenu}) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-hidden">
      <div className="flex justify-between items-center pb-6">
        <Logo />
        <button type="button" className="lg:hidden block cursor-pointer text-black text-2xl self-end" aria-label="Close Menu" onClick={toggleMenu}>
          &times;
        </button>
      </div>

      <div className="space-y-4">
        {
          navItems.map(({link, label}) => (
          <a href={link} key={label} className="block text-lg text-dark hover:text-primary transition-colors duration-150">
            {label}
          </a>
          ))
        }
      </div>
    </div>
  )
}
