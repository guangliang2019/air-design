import { Prototype } from "../../_interface";

const MdCodePrototype: Prototype<{ content: string }> = (controller) => {
  return {
    element: "code",
    attributes: {
      className: "a-md-code",
      innerText: controller.props.content,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdCodePrototype;
