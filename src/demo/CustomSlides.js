import React from "react";
import { StackSlider, useSlider } from "../StackSlider/StackSlider";
import ChildMainSlide from "./ChildMainSlide";
import DemoSlides from "./DemoSlides";

const demoSlides = [
  { name: "a", direction: "right" },
  { name: "b", direction: "left" },
];

const CustomSlides = ({ str, d, setD }) => {
  const { trigerSlider } = useSlider();

  return (
    <>
      <StackSlider>
        <div style={{ cursor: "pointer" }} onClick={() => trigerSlider()}>
          BACK
        </div>
        <div>{str}</div>
        <p>{d}</p>
        <p onClick={() => setD((prev) => ++prev)}>+</p>

        <ChildMainSlide str={str} d={d} setD={setD} />

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
    </>
  );
};

export default CustomSlides;
