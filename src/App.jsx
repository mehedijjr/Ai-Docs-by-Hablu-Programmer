import { Footer } from "../public/Footer";
import { Hero } from "./components/landing/Hero";
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
        <Footer />
      </main>
    </>
  );
};

export default App;
