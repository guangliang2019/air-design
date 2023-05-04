import { Prototype, TemplateTree } from "../_interface";
import MdPPrototype from "./components/MdP";
import MdH1Prototype from "./components/MdH1";
import MdH2Prototype from "./components/MdH2";
import { MdProps } from "./interface";
import { trim } from "./utils";
import MdUlPrototype from "./components/MdUl";

const MdPrototype: Prototype<MdProps> = (controller) => {
  const content = controller.props.content;
  const blocks = content
    .split("\n")
    .map(trim)
    .filter((str) => str);
  let currUl: string[] = [];
  const compileBlock = (str: string, i: number): TemplateTree | undefined => {
    // 二级标题 h2
    if (str.indexOf("## ") === 0)
      return MdH2Prototype({ props: { content: str.slice(3) } });
    // 一级标题 h1
    if (str.indexOf("# ") === 0)
      return MdH1Prototype({ props: { content: str.slice(2) } });
    // 无序列表 ul
    if (str.indexOf("- ") === 0) {
      currUl.push(str.slice(2));
      if (currUl.length > 0 && blocks[i + 1]?.indexOf("- ") !== 0) {
        const ulContent = currUl.slice(0);
        currUl = [];
        return MdUlPrototype({ props: { content: ulContent } });
      }
      return;
    }
    // 段落 p
    return MdPPrototype({ props: { content: str.slice(0) } });
  };

  return {
    element: "main",
    attributes: {
      className: `a-md`,
    },
    children: blocks
      .map((s, i) => compileBlock(s, i))
      .filter((v) => !!v) as TemplateTree[],
  };
};

export default MdPrototype;
