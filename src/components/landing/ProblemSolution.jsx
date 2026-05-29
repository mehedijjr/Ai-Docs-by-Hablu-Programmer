import { problemSolutions } from "../../lib/utils/db/data";
import { Container } from "../Container";
import { ProblemSolutionCard } from "./ProblemSolutionCard";
import { ProblemSolutionHeader } from "./ProblemSolutionHeader";

export const ProblemSolution = () => {
  return (
    <section className="pt-32">
      <Container>
        <ProblemSolutionHeader />
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5">
          {problemSolutions.map((problem) => (
            <ProblemSolutionCard key={problem.id} {...problem} />
          ))}
        </div>
      </Container>
    </section>
  );
};
