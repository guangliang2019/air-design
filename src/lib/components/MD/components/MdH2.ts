import { Controller, TemplateTree } from "../../_interface";

const MdH2Prototype = (
  controller: Controller<{ id?: string; content: string }>
): TemplateTree => {
  return {
    element: "h2",
    attributes: {
      className: "a-md-h2",
      id: controller.props.id,
      innerText: controller.props.content,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdH2Prototype;
