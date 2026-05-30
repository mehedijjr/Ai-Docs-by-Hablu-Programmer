import { useState } from "react";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { faqs } from "../../lib/utils/db/data";
import { FaqCard } from "./FaqCard";

export const Faq = () => {
  const [active, setActive] = useState(null);

  const handleChange = (id) => {
    active === id ? setActive(null) : setActive(id);
  };

  return (
    <section className="mt-12.5 sm:mt-20 lg:mt-25 xl:mt-37.5 relative">
      <Container className="max-w-245.5 relative z-10">
        <SectionTitle gradient="Asked Questions" className="text-center">
          Frequently
        </SectionTitle>

        <div className="pt-10 space-y-5">
          {faqs.map((faq, id) => (
            <FaqCard
              key={faq.id}
              {...faq}
              onClick={() => handleChange(id)}
              isActive={active === id}
            />
          ))}
        </div>
      </Container>

      <img src="/bg_Image.png" alt="Bg Image" className="absolute z-0 -top-28.75 -left-135 w-428.25 h-147.5" />
    </section>
  );
};
