import { Button, Circle, GlobalStyle, Section } from "./MyStyles";
import useCircles from "./useCircles";

type SectionProps = React.MouseEventHandler<HTMLElement> | undefined;

type ButtonProps = React.MouseEventHandler<HTMLButtonElement> | undefined;
export interface CoordinatesProps {
  clientX: number;
  clientY: number;
}

function App() {
  const remove = useCircles();
  const { circles, addLastCircle, removeLastCircle, handleRedor } =
    useCircles(remove);

  const handleClick: SectionProps = (event) => {
    const { clientX, clientY } = event;
    addLastCircle({ clientX, clientY });
  };
  console.log(remove.circles);
  console.log(useCircles().circles);
  const handleClear: ButtonProps = (event) => {
    event.stopPropagation();
    removeLastCircle();
  };

  const handleUndo: ButtonProps = (event) => {
    event.stopPropagation();
    handleRedor();
  };
  return (
    <Section onClick={handleClick}>
      <GlobalStyle />
      <Button
        background="red"
        onClick={handleClear}
        disabled={circles.length === 0}
      >
        ANULAR
      </Button>

      <Button
        background="blue"
        onClick={handleUndo}
        disabled={remove.circles.length === 0}
      >
        REFAZER
      </Button>

      {circles.map(({ clientX, clientY }, index) => (
        <Circle key={index} left={clientX - 12} top={clientY - 12}></Circle>
      ))}
    </Section>
  );
}

export default App;
