import { Prototype } from "../../_interface";

const MdH2Prototype: Prototype<{ content: string; id?: string }> = (
  controller
) => {
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
