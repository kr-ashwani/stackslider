import React from "react";
import { useSlider } from "../StackSlider/StackSlider";
import CustomSlides from "./CustomSlides";

const DemoSlides = ({ name, direction, str, d, setD }) => {
  const { trigerSlider } = useSlider();

  if (name === "e")
    return (
      <CustomSlides
        name={name}
        direction={direction}
        str={str}
        d={d}
        setD={setD}
      />
    );

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => trigerSlider()}>
        BACK
      </div>
      <div>{str}</div>
      <p>{d}</p>
      <p onClick={() => setD((prev) => ++prev)}>+</p>
    </>
  );
};

export default DemoSlides;
