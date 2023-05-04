import { Prototype } from "../../_interface";

const MdH1Prototype: Prototype<{ content: string; id?: string }> = (
  controller
) => {
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
