import { Prototype } from "../../_interface";

const MdAPrototype: Prototype<{ content: string; href: string }> = (
  controller
) => {
  return {
    element: "a",
    attributes: {
      className: "a-md-a",
      innerText: controller.props.content,
      href: controller.props.href,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdAPrototype;
