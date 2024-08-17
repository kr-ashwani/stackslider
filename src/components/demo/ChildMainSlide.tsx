import React, { Dispatch, SetStateAction } from "react";
import { RightClickSvg } from "./Chevron";
import { useSlider } from "../StackSlider/StatckSlider";

const ChildMainSlide = ({
  str,
  d,
  setD,
}: {
  str: string;
  d: number;
  setD: Dispatch<SetStateAction<number>>;
}) => {
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
          <p>Display & accessibility</p>
          <RightClickSvg />
        </li>
      </ul>
    </div>
  );
};

export default ChildMainSlide;
