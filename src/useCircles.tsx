import { useState } from "react";
import { CoordinatesProps } from "./App";

const useCircles = () => {
  const [circles, setCircles] = useState<CoordinatesProps[]>([]);

  const addObjects = (clientX: number, clientY: number) => {
    setCircles([...circles, { clientX, clientY }]);
  };

  return { addObjects };
};

export default useCircles;
