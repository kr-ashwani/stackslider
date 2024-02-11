import React from "react";
import { LeftClickSvg, RightClickSvg } from "./Chevron";
import { useSlider } from "../StackSlider/StackSlider";

const ChildMainSlide = ({ str, d, setD }) => {
  const { trigerSlider } = useSlider();

  return (
    <div>
      <h1>child Profile</h1>
      <ul className="profileList">
        <li onClick={() => trigerSlider("a")}>
          <p>Setting & privacy</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("b")}>
          <LeftClickSvg />
          <p>Display & accessibility</p>
        </li>
      </ul>
    </div>
  );
};

export default ChildMainSlide;
