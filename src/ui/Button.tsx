import clsx from "clsx";

import type { MouseEventHandler } from "react";
import type React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: any;
  isOutLine: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      className={clsx("border border-blue-500 rounded-lg p-3 m-[.4rem]", {
        "bg-transparent text-blue-500": props.isOutLine === true,
        "bg-blue-500 text-white": props.isOutLine === false,
      })}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
