import React, { Dispatch, SetStateAction } from "react";
import DemoSlides from "./DemoSlides";
import ChildMainSlide from "./ChildMainSlide";
import useSlide from "../StackSlider/utils/useSlide";

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
  const { trigerSlider } = useSlide();

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => trigerSlider("close", "e")}>
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
    </>
  );
};

export default CustomSlides;
