import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { SectionTitle } from "./components/SectionTitle";

const App = () => {
  return (
    <>
      <Button>Primary Button</Button>
      <Button className="text-black">Secondary Button</Button>

      <Container></Container>
      <SectionTitle gradient="Solution">Problem &</SectionTitle>
    </>
  );
};

export default App;
