import { Container } from "../components/Container";
import { Logo } from "./Logo";
import { Button } from "../components/Button";
import { navItems } from "../lib/utils/db/data";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

export const Navbar = () => {
  const [isMenusOpen, setIsMenusOpen] = useState(false);
  const toggleMenu = () => setIsMenusOpen((prev) => !prev);
  return (
    <>
      <nav className="py-5 ">
        <Container>
          <div className="flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-7.5 py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
            <Logo />
            <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
              {navItems.map(({ label, link }) => (
                <a key={label} href={link}>
                  <p className="text-dark text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer">
                    {label}
                  </p>
                </a>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <button className="lg:hidden block text-dark cursor-pointer" onClick={toggleMenu}>
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-black" />
                  <span className="block w-6 h-0.5 bg-black" />
                  <span className="block w-6 h-0.5 bg-black" />
                </div>
              </button>
              <Button>Get Started Today</Button>
            </div>
          </div>
          {isMenusOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </Container>
      </nav>
    </>
  );
};


