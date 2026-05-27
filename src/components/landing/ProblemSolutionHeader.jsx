import { Arrow } from "../../shared/icon/Icon";
import { SectionTitle } from "../SectionTitle";

export const ProblemSolutionHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5">
      <SectionTitle gradient="Solution">Problem &</SectionTitle>

      <div className="flex justify-center items-center gap-2.5 sm:gap-3.75">
        <button className="bg-white size-9 sm:size-10 rounded-full text-primary flex justify-center items-center shadow-[0px_4px_15px_0px_#0000001A]">
          <Arrow />
        </button>
        <button className="bg-primary size-9 sm:size-10 rounded-full text-white flex justify-center items-center shadow-[0px_4px_15px_0px_#0000001A]">
          <Arrow />
        </button>
      </div>
    </div>
  );
};
