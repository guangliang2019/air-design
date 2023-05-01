import { Prototype } from "../_interface";
import { ButtonProps } from "./interface";

const ButtonPrototype: Prototype<ButtonProps> = (controller) => {
  console.log(controller.props.type);
  return {
    element: "div",
    attributes: {
      className: "a-button",
      onclick: (e: MouseEvent) => {
        controller.props.onClick?.(e);
      },
    },
    children: [{ element: "slot" }],
  };
};

export default ButtonPrototype;
