import React, { useContext, useEffect, useRef, useState } from "react";
import "./StackSlider.css";
import getChildren from "./getChildren";

const StackSliderContext = React.createContext();

function useSlider() {
  return useContext(StackSliderContext);
}
const initialState = {
  active: false,
  direction: "",
  ActiveComponentName: null,
  stackSliding: false,
};
const SLIDING_TIME = 500;

const StackSlider = ({ children }) => {
  const [slideInfo, setSlideInfo] = useState(initialState);
  const componentsDirectionMap = useRef({});
  const storeTimer = useRef(null);
  const mainStack = useRef([]);
  const slides = useRef({});
  const [showSlides, setShowSlides] = useState(false);

  getChildren({ children, slides, mainStack, componentsDirectionMap });

  function trigerSlider(ActiveComponentName) {
    const direction = componentsDirectionMap.current[ActiveComponentName];

    if (!ActiveComponentName && !direction) {
      setSlideInfo((prev) => ({
        ...prev,
        stackSliding: true,
      }));

      storeTimer.current = setTimeout(() => {
        setSlideInfo(initialState);
      }, SLIDING_TIME);
    } else {
      if (slideInfo.active && !strCompare(slideInfo.direction, direction))
        return;

      clearTimeout(storeTimer.current);
      setSlideInfo((prev) => ({
        ...prev,
        active: true,
        direction,
        ActiveComponentName,
        stackSliding: false,
      }));
    }
  }

  //adding short delay for triggering animation
  useEffect(() => {
    if (slideInfo.active && !slideInfo.stackSliding)
      setTimeout(() => {
        setShowSlides(true);
      }, 0);
    else
      setTimeout(() => {
        setShowSlides(false);
      }, 0);
  }, [slideInfo]);

  const values = {
    slideInfo,
    trigerSlider,
    componentsDirectionMap: { ...componentsDirectionMap.current },
  };
  return (
    <StackSliderContext.Provider value={values}>
      <div
        className={`${
          slideInfo.stackSliding ? "" : slideInfo.direction
        } __parent-slider`}
        style={{ "--SLIDING_TIME": SLIDING_TIME }}
      >
        <div className="__main-slider">
          {mainStack.current.map((elem) => elem)}
        </div>
        {slideInfo.active && slides.current[slideInfo.ActiveComponentName] ? (
          <div
            className={`${
              slideInfo.direction ? slideInfo.direction : "right"
            } ${showSlides ? "show" : ""} __child-slider`}
          >
            {slides.current[slideInfo.ActiveComponentName]}
          </div>
        ) : null}
      </div>
    </StackSliderContext.Provider>
  );
};

const strCompare = (str1, str2) => {
  if (
    (typeof str1 === "string" || str1 instanceof String) &&
    (typeof str2 === "string" || str2 instanceof String)
  ) {
    return str1.toLowerCase() === str2.toLowerCase();
  }
  return false;
};

export { StackSlider, useSlider };
