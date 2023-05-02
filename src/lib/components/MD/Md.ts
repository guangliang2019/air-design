import { Controller, TemplateTree } from "../_interface";
import MdPPrototype from "./components/MdP";
import MdH1Prototype from "./components/MdH1";
import MdH2Prototype from "./components/MdH2";
import { MdProps } from "./interface";
import { trim } from "./utils";

const MdPrototype = (controller: Controller<MdProps>): TemplateTree => {
  const content = controller.props.content;
  const inlines = content
    .split("\n")
    .map(trim)
    .filter((str) => str);
  const compileInline = (str: string): TemplateTree => {
    if (str.indexOf("## ") === 0)
      return MdH2Prototype({ props: { content: str.slice(3) } });
    if (str.indexOf("# ") === 0)
      return MdH1Prototype({ props: { content: str.slice(1) } });
    return MdPPrototype({ props: { content: str.slice(0) } });
  };
  return {
    element: "main",
    attributes: {
      className: `a-md`,
    },
    children: inlines.map((s) => compileInline(s)),
  };
};

export default MdPrototype;
