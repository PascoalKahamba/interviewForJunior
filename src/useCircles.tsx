import { useState } from "react";
interface CoordinatesProps {
  clientX: number;
  clientY: number;
}
interface UseCirclesProps {
  addCircles: (coordinates: { clientX: number; clientY: number }) => void;
  removeCircles: (afterAdd?: boolean) => void;
  circles: CoordinatesProps[];
}

const useCircles = (props?: UseCirclesProps) => {
  const [circles, setCircles] = useState<CoordinatesProps[]>([]);

  const addCircles = (coordinates: { clientX: number; clientY: number }) => {
    setCircles([...circles, coordinates]);
  };

  const removeCircles = (afterAdd = true) => {
    if (props && afterAdd) props.addCircles(circles.at(-1)!);

    setCircles((preview) => preview.slice(0, -1));
  };

  const handleRedor = () => {
    if (props) {
      addCircles(props.circles.at(-1)!);
      props.removeCircles(false);
    }
  };
  return { addCircles, removeCircles, handleRedor, circles };
};

export default useCircles;
