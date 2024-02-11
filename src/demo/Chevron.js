import React from "react";

const RightClickSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 0 24 24"
      width="20px"
      fill="#fff"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  );
};

const LeftClickSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill="#fff"
      className="bi bi-chevron-left"
      viewBox="0 0 16 16"
      style={{
        fontSize: "1.2rem",
        fontWeight: "600px",
        margin: " 0 8px 0 -8px",
      }}
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
      />
    </svg>
  );
};

export { LeftClickSvg, RightClickSvg };
