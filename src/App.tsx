import { useState } from "react";
import { Button, Circle, GlobalStyle, Section } from "./MyStyles";

type SectionProps = React.MouseEventHandler<HTMLElement> | undefined;

type ButtonProps = React.MouseEventHandler<HTMLButtonElement> | undefined;
interface CoordinatesProps {
  clientX: number;
  clientY: number;
}

function App() {
  const [circles, setCircles] = useState<CoordinatesProps[]>([]);

  const handleClick: SectionProps = (event) => {
    const { clientX, clientY } = event;
    setCircles([...circles, { clientX, clientY }]);
    console.log(circles);
  };

  const handleClear: ButtonProps = () => {
    console.log("clear");
  };

  const handleUndo: ButtonProps = () => {
    console.log("undo");
  };
  return (
    <Section onClick={handleClick}>
      <GlobalStyle />
      <Button onClick={handleClear}>anular</Button>

      <Button onClick={handleUndo}>desfazer</Button>

      {circles.map(({ clientX, clientY }, index) => (
        <Circle key={index} left={clientX - 12} top={clientY - 12}></Circle>
      ))}
    </Section>
  );
}

export default App;
