import React, { Dispatch, SetStateAction } from "react";
import DemoSlides from "./DemoSlides";
import { StackSlider, useSlider } from "../StackSlider/StatckSlider";
import ChildMainSlide from "./ChildMainSlide";

const demoSlides = [{ name: "a" }, { name: "b" }];

const CustomSlides = ({
  name,
  str,
  d,
  setD,
}: {
  name: string;
  str: string;
  d: number;
  setD: Dispatch<SetStateAction<number>>;
}) => {
  const { trigerSlider } = useSlider();

  return (
    <>
      <StackSlider width="w-[300px]">
        <div style={{ cursor: "pointer" }} onClick={() => trigerSlider("")}>
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
