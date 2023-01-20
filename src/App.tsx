import { useEffect, useState } from "react";
import { Button, Circle, GlobalStyle, Section } from "./MyStyles";

type SectionProps = React.MouseEventHandler<HTMLElement> | undefined;

type ButtonProps = React.MouseEventHandler<HTMLButtonElement> | undefined;
interface CoordinatesProps {
  clientX: number;
  clientY: number;
}

function App() {
  const [circles, setCircles] = useState<CoordinatesProps[]>([]);
  const [removeCircles, setRemoveCircles] = useState<CoordinatesProps[]>([]);

  const handleClick: SectionProps = (event) => {
    const { clientX, clientY } = event;
    setCircles([...circles, { clientX, clientY }]);
    console.log(circles);
  };

  const handleClear: ButtonProps = (event) => {
    event.stopPropagation();
    setRemoveCircles([...removeCircles, circles.at(-1)!]);
    setCircles((preview) => preview.slice(0, -1));
  };

  const handleUndo: ButtonProps = (event) => {
    event.stopPropagation();
    setCircles([...circles, removeCircles.at(-1)!]);
    setRemoveCircles((preview) => preview.slice(0, -1));
  };
  return (
    <Section onClick={handleClick}>
      <GlobalStyle />
      <Button onClick={handleClear} disabled={circles.length === 0}>
        ANULAR
      </Button>

      <Button onClick={handleUndo} disabled={removeCircles.length === 0}>
        REFAZER
      </Button>

      {circles.map(({ clientX, clientY }, index) => (
        <Circle key={index} left={clientX - 12} top={clientY - 12}></Circle>
      ))}
    </Section>
  );
}

export default App;
