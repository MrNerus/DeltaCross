import React from "react";

interface Props {
  chidren?: JSX.Element;
  width?: number;
  height?: number;
  background: string;
}
const Modal = (prop: Props) => {
  var children = prop.chidren === null || prop.chidren === undefined ? "" : prop.chidren;
  var width = prop.width === null || prop.width === undefined ? 100 : prop.width;
  var height = prop.height === null || prop.height === undefined ? 100 : prop.height;
  return <div>Modal</div>;
};

export default Modal;
