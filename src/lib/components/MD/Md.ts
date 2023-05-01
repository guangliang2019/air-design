import { Controller, TemplateTree } from "../_interface";
import { MdProps } from "./interface";

const MdPrototype = (controller: Controller<MdProps>): TemplateTree => {
  const content = controller.props.content;
  const inlines = content.split("\n");
  console.log(inlines);
  return {
    element: "div",
    attributes: {
      className: "a-md",
    },
  };
};

export default MdPrototype;
