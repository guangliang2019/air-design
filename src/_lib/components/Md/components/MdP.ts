import { Prototype } from "../../_interface";
import { compileInline } from "../utils";
const MdPPrototype: Prototype<{ content: string }> = (controller) => {
  return {
    element: "p",
    attributes: {
      className: "a-md-p",
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
