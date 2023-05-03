import { Prototype } from "../../_interface";

const MdSpanPrototype: Prototype<{ content: string }> = (controller) => {
  return {
    element: "span",
    attributes: {
      className: "a-md-span",
      innerText: controller.props.content,
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdSpanPrototype;
