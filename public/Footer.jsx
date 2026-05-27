import { Container } from "../src/components/Container";
import { navItems, socialIcon } from "../src/lib/utils/db/data";

export const Footer = () => {
  return (
    <div className="pt-5 lg:pt-6">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-2.5 py-5">
          <h1 className="font-primary text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">
            AI GoverningDocs
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 lg:gap-3 xl:gap-4">
            {navItems.map(({ label, link }) => (
              <a key={label} href={link}>
                <p className="text-dark text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer">
                  {label}
                </p>
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3.5 xl:gap-4">
            {
              socialIcon.map(({img, url, id}) => (
                <a href={url} target="_blank" key={id}>
                  <img src={img} alt={id} className="size-9" />
                </a>
              ))
            }
          </div>
        </div>
        <div className="footer-border-color border-t border-transparent mt-5 md:mt-13 lg:mt-26.5">
          <p className="text-lg text-center leading-4.5 text-[#111111] py-6">Ai GoverningDocs 2024. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

