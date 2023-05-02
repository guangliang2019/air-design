import { Controller, TemplateTree } from "../../_interface";

const MdPPrototype = (
  controller: Controller<{ content: string }>
): TemplateTree => {
  return {
    element: "p",
    attributes: {
      className: "a-md-p",
      innerText: controller.props.content,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdPPrototype;
