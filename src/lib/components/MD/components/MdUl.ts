import { Prototype } from "../../_interface";
import MdLiPrototype from "./MdLi";

const MdUlPrototype: Prototype<{ content: string[] }> = (controller) => {
  return {
    element: "ul",
    attributes: {
      className: "a-md-ul",
    },
    children: [
      ...controller.props.content.map((content) =>
        MdLiPrototype({ props: { content } })
      ),
      {
        element: "slot",
      },
    ],
  };
};

export default MdUlPrototype;
