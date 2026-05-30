import { partners } from "../../lib/utils/db/data";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";

export const Partner = () => {
  return (
    <section >
      <Container className="bg-[#E6F9FD] max-w-319 py-12.5 px-3 rounded-[20px]">
        <SectionTitle gradient="Partners" className="text-center">
          Our
        </SectionTitle>

        <div className="pt-10 flex justify-center items-center flex-wrap gap-x-7.5 gap-y-7">
          {partners.map(({ src, alt, id }) => (
            <div key={id} className="w-68.5 bg-white border border-[#D6D6D6] rounded-xl h-25.25">
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
