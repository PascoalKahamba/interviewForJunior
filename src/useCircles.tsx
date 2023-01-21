import { useState } from "react";
import { CoordinatesProps } from "./App";

interface UseCirclesProps {
  addLastCircle: (coordinates: { clientX: number; clientY: number }) => void;
  removeLastCircle: (afterAdd?: boolean) => void;
  circles: CoordinatesProps[];
}

const useCircles = (props?: UseCirclesProps) => {
  const [circles, setCircles] = useState<CoordinatesProps[]>([]);

  const addLastCircle = (coordinates: { clientX: number; clientY: number }) => {
    setCircles([...circles, coordinates]);
  };

  const removeLastCircle = (afterAdd = true) => {
    if (props && afterAdd === true) props.addLastCircle(circles.at(-1)!);

    setCircles((preview) => preview.slice(0, -1));
  };

  const handleRedor = () => {
    console.log("Hello");
    console.log(props);
    if (props) {
      addLastCircle(props.circles.at(-1)!);
      props.removeLastCircle(false);
      console.log("Hello");
    }
  };
  return { addLastCircle, removeLastCircle, handleRedor, circles };
};

export default useCircles;
