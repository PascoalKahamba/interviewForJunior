import { useState } from "react";
import { GlobalStyle, Section } from "./MyStyles";

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
    </Section>
  );
}

export default App;
