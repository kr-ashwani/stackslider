import React from "react";

const getChildren = ({
  children,
  slides,
  mainStack,
  componentsDirectionMap,
}) => {
  let j = 0;
  const elemArr = React.Children.toArray(children);
  for (let i = 0; i < elemArr.length; i++) {
    const elems = elemArr[i];
    if (elems.props && elems.props.name && elems.props.direction) {
      componentsDirectionMap.current[elems.props.name] = elems.props.direction;
      slides.current[elems.props.name] = elems;
    } else {
      mainStack.current[j++] = elems;
    }
  }
};

export default getChildren;
