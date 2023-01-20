import { GlobalStyle, Section } from "./MyStyles";

type SectionProps = React.MouseEventHandler<HTMLElement> | undefined;

const handleClick: SectionProps = (event) => {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
};
function App() {
  return (
    <Section onClick={handleClick}>
      <GlobalStyle />
    </Section>
  );
}

export default App;
