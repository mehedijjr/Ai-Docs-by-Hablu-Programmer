import { Button } from "../Button";
import { Container } from "../Container";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-28 xl:pt-35.5">
      <Container className="flex flex-col-reverse md:flex-row justify-center md:justify-end items-center gap-5 md:gap-0">
        <div className="space-y-5 md:space-y-7.25">
          <h1 className="font-primary font-bold text-2xl md:text-4xl lg:text-6xl md:leading-15 lg:leading-19 max-w-148.25">Simplify your real estate document analysis</h1>
          <p className="font-semibold text-base md:text-xl max-w-129.75">Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>
          <Button>Get Started Today</Button>
        </div>
        <div>
            <img src="/hero-side.png" alt="Hero Image" className="w-[80%] md:w-[550px] xl:w-[740px] mx-auto" />
        </div>
      </Container>
    </section>
  );
};
