import { Controller, TemplateTree } from "../_interface";
import { MdProps } from "./interface";

const MdPrototype = (controller: Controller<MdProps>): TemplateTree => {
  // const content = controller.props.content;
  // console.log(controller.props.content);
  // const inlines = content.split("\n");
  // console.log(inlines);
  return {
    element: "div",
    attributes: {
      className: "a-md",
      innerText: controller.props.content,
    },
  };
};

export default MdPrototype;
