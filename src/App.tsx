import { Button, Circle, GlobalStyle, Section } from "./MyStyles";
import useCircles from "./useCircles";

type SectionProps = React.MouseEventHandler<HTMLElement> | undefined;

type ButtonProps = React.MouseEventHandler<HTMLButtonElement> | undefined;

function App() {
  const theRemoveCircles = useCircles();
  const { circles, addCircles, removeCircles, handleRedor } =
    useCircles(theRemoveCircles);

  const handleClick: SectionProps = (event) => {
    const { clientX, clientY } = event;
    addCircles({ clientX, clientY });
  };

  const theUndoCircles: ButtonProps = (event) => {
    event.stopPropagation();
    removeCircles();
  };

  const theRederCircles: ButtonProps = (event) => {
    event.stopPropagation();
    handleRedor();
  };
  return (
    <Section onClick={handleClick}>
      <GlobalStyle />
      <Button
        background="red"
        onClick={theUndoCircles}
        disabled={circles.length === 0}
      >
        ANULAR
      </Button>

      <Button
        background="blue"
        onClick={theRederCircles}
        disabled={theRemoveCircles.circles.length === 0}
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
