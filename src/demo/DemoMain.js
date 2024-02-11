import React from "react";
import { useSlider } from "../StackSlider/StackSlider";
import { RightClickSvg, LeftClickSvg } from "./Chevron";
import "./DemoMain.css";

const DemoMain = ({ d, setD }) => {
  const { trigerSlider } = useSlider();

  return (
    <div className="mainStack">
      <p>{d}</p>
      <h1>Your Profile</h1>
      <ul className="profileList">
        <li onClick={() => trigerSlider("a")}>
          <p>Setting & privacy</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("b")}>
          <p>Help & support</p>
          <RightClickSvg />
        </li>
        <li onClick={() => trigerSlider("c")}>
          <LeftClickSvg />
          <p>Display & accessibility</p>
        </li>
        <li onClick={() => trigerSlider("d")}>
          <LeftClickSvg />
          <p>Extra</p>
        </li>
        <li>Give feedback</li>
        <li>Log out</li>
        <li
          onClick={() => {
            //console.log(demoState);
            setD((prev) => ++prev);
          }}
        >
          +
        </li>
        <li onClick={() => trigerSlider("e")}>
          <RightClickSvg />
          <p>Custom slides</p>
        </li>
      </ul>
    </div>
  );
};

export default DemoMain;
