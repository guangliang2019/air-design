import { TemplateTree } from "../../_interface";

const MdCodePrototype = (): TemplateTree => {
  return {
    element: "code",
    attributes: {
      className: "a-md-code",
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdCodePrototype;
