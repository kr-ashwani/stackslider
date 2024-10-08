import React, { Dispatch, SetStateAction } from "react";
import { RightClickSvg } from "./Chevron";
import useSlide from "../StackSlider/utils/useSlide";

const DemoMain = ({ d, setD }: { d: number; setD: Dispatch<SetStateAction<number>> }) => {
  const { trigerSlider } = useSlide();

  return (
    <div className="mainStack">
      <p>{d}</p>
      <h1>Your Profile</h1>
      <ul className="profileList">
        <li onClick={() => trigerSlider("open", "a")}>
          <p>Setting & privacy</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("open", "b")}>
          <p>Help & support</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("open", "c")}>
          <p>Display & accessibility</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("open", "d")}>
          <p>Extra</p>
          <RightClickSvg />
        </li>
        <li>Give feedback</li>
        <li>Log out</li>
        <li
          onClick={() => {
            setD((prev) => ++prev);
          }}
        >
          +
        </li>
        <li onClick={() => trigerSlider("open", "e")}>
          <p>Custom slides</p>
          <RightClickSvg />
        </li>
      </ul>
    </div>
  );
};

export default DemoMain;
function useSlider(): { trigerSlider: any } {
  throw new Error("Function not implemented.");
}
