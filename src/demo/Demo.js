import React, { useState } from "react";
import { StackSlider } from "../StackSlider/StackSlider";
import DemoMain from "./DemoMain";
import DemoSlides from "./DemoSlides";

const demoSlides = [
  { name: "a", direction: "right" },
  { name: "b", direction: "right" },
  { name: "c", direction: "left" },
  { name: "d", direction: "left" },
  { name: "e", direction: "right" },
];

const Demo = () => {
  const [d, setD] = useState(0);

  return (
    <StackSlider>
      <DemoMain d={d} setD={setD} />
      {demoSlides.map((elem, index) => (
        <DemoSlides
          key={index}
          name={elem.name}
          direction={elem.direction}
          str={`Component Name is ${elem.name}`}
          d={d}
          setD={setD}
        />
      ))}
    </StackSlider>
  );
};

export default Demo;
