import { Prototype } from "../../_interface";
import { compileInline } from "../utils";

const MdPPrototype: Prototype<{ content: string }> = (controller) => {
  return {
    element: "li",
    attributes: {
      className: "a-md-li",
      innerText: controller.props.content,
    },
    children: [
      ...compileInline(controller.props.content),
      {
        element: "slot",
      },
    ],
  };
};

export default MdPPrototype;
