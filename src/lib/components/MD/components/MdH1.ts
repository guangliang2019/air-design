import { Controller, TemplateTree } from "../../_interface";

const MdH1Prototype = (
  controller: Controller<{ id: string }>
): TemplateTree => {
  return {
    element: "h1",
    attributes: {
      className: "a-md-h1",
      id: controller.props.id,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdH1Prototype;
