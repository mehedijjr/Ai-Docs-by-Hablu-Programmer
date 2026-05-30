import { useState } from "react";
import { reviews } from "../../lib/utils/db/data";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { ReviewCard } from "./ReviewCard";


export const Reviews = () => {
  const [active, setActive] = useState(1);
  return (
    <section className="bg-[#F6F6F6] my-12.5 sm:my-20 lg:my-25 xl:my-37.5 py-10 lg:py-20">
      <Container>
        <SectionTitle gradient="Our Client" className="text-center">
          Reviews From
        </SectionTitle>

        <div className="pt-10 flex justify-center items-center gap-23.5">
          <div className="bg-[#E2DED8] w-1.25 rounded-[50px]">
            <div className="flex flex-col justify-between items-center gap-3.75">
              <div className="w-1.25 h-23 rounded-[20px] bg-transparent" />
              <div className="w-1.25 h-23 rounded-[20px] bg-primary" />
              <div className="w-1.25 h-23 rounded-[20px] bg-transparent" />
            </div>
          </div>
          <div className="space-y-3.75 grow">
            {reviews.map((review) => (
              <ReviewCard key={review.id} onClick={() => setActive(review.id)} active={active === review.id} {...review} />
            ))}
          </div>
          {/* review details */}
          <div className="space-y-7.5">
            <h1 className="font-bold text-[30px]">
              It was a amazing experience!
            </h1>
            <div>⭐⭐⭐⭐⭐</div>
            <p className="text-base text-muted max-w-125">details</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
