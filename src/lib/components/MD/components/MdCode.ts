import { TemplateTree } from "../../_interface";

const MdPPrototype = (): TemplateTree => {
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

export default MdPPrototype;
