import React, { Dispatch, SetStateAction } from "react";
import CustomSlides from "./CustomSlides";
import useSlide from "../StackSlider/utils/useSlide";

const DemoSlides = ({
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

  if (name === "e") return <CustomSlides name={name} str={str} d={d} setD={setD} />;

  return (
    <>
      <div className="h-full">
        <div
          style={{ cursor: "pointer", backgroundColor: "#242526" }}
          onClick={() => trigerSlider("close", name)}
        >
          BACK
        </div>
        <div>{str}</div>
        <p>{d}</p>
        <p onClick={() => setD((prev) => ++prev)}>+</p>
      </div>
    </>
  );
};

export default DemoSlides;
function useSlider(): { trigerSlider: any } {
  throw new Error("Function not implemented.");
}
