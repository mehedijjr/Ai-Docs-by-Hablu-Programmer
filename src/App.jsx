import { Footer } from "../public/Footer";
import { Faq } from "./components/landing/Faq";
import { Hero } from "./components/landing/Hero";
import { Note } from "./components/landing/Note";
import { Partner } from "./components/landing/Partner";
import { ProblemSolution } from "./components/landing/ProblemSolution";
import { Reviews } from "./components/landing/Reviews";
import { Navbar } from "./shared/Navbar";


const App = () => {
  return (
    <>
      <main className="font-secondary bg-[url(/vector.png)] min-h-svh bg-no-repeat bg-top">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Reviews />
        <Partner />
        <Faq />
        <Note />
        <Footer />
      </main>
    </>
  );
};

export default App;
