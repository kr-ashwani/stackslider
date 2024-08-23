import React, { Dispatch, SetStateAction } from "react";
import { RightClickSvg } from "./Chevron";
import useSlide from "../StackSlider/utils/useSlide";

const ChildMainSlide = ({
  str,
  d,
  setD,
}: {
  str: string;
  d: number;
  setD: Dispatch<SetStateAction<number>>;
}) => {
  const { trigerSlider } = useSlide();

  return (
    <div>
      <h1>child Profile</h1>
      <ul className="profileList">
        <li onClick={() => trigerSlider("open", "a")}>
          <p>Setting & privacy</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("open", "b")}>
          <p>Display & accessibility</p>
          <RightClickSvg />
        </li>
      </ul>
    </div>
  );
};

export default ChildMainSlide;
