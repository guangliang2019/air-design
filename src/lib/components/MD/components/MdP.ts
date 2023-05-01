import { TemplateTree } from "../../_interface";

const MdPPrototype = (): TemplateTree => {
  return {
    element: "h2",
    attributes: {
      className: "a-md-p",
    },
    children: [
      {
        element: "slot",
      },
    ],
  };
};

export default MdPPrototype;
