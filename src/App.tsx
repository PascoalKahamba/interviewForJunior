import { useState } from "react";
import { Circle, GlobalStyle, Section } from "./MyStyles";

type SectionProps = React.MouseEventHandler<HTMLElement> | undefined;
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
  return (
    <Section onClick={handleClick}>
      <GlobalStyle />
      {circles.map(({ clientX, clientY }, index) => (
        <Circle key={index} left={clientX - 12} top={clientY - 12}></Circle>
      ))}
    </Section>
  );
}

export default App;
