import { Controller, TemplateTree } from "../../_interface";

const MdH1Prototype = (
  controller: Controller<{ id?: string; content: string }>
): TemplateTree => {
  return {
    element: "h1",
    attributes: {
      className: "a-md-h1",
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

export default MdH1Prototype;
