import { Controller, TemplateTree } from "../../_interface";

const MdH2Prototype = (
  controller: Controller<{ id: string }>
): TemplateTree => {
  return {
    element: "h2",
    attributes: {
      className: "a-md-h2",
      id: controller.props.id,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdH2Prototype;
