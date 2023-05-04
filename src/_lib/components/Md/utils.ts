import { TemplateTree } from "../_interface";
import MdAPrototype from "./components/MdA";
import MdCodePrototype from "./components/MdCode";
import MdSpanPrototype from "./components/MdSpan";

export const trim = (str: string) => str?.replace(/(^\s*)|(\s*$)/g, "");

export const compileInline = (content: string) => {
  const inlines: TemplateTree[] = [];
  const curr = {
    jump: false,
    text: "",
    special: "",
  };
  const clearSpecial = () => {
    curr.text += curr.special;
    curr.special = "";
  };
  for (const char of content) {
    if (curr.jump) {
      curr.text += char;
      curr.jump = false;
      continue;
    }
    switch (char) {
      case "\\":
        curr.jump = true;
        break;
      case "[":
        curr.special += char;
        break;
      case ")":
        curr.special += char;
        if (curr.special?.[0] !== "[") clearSpecial();
        if (curr.special.includes("](")) {
          inlines.push(MdSpanPrototype({ props: { content: curr.text } }));
          const [title, url] = curr.special.slice(1, -1).split("](");
          inlines.push(MdAPrototype({ props: { content: title, href: url } }));
          curr.text = "";
          curr.special = "";
        } else clearSpecial();
        break;
      case "`":
        if (curr.special?.[0] !== "`") {
          clearSpecial();
          curr.special += char;
        } else {
          curr.special += char;
          inlines.push(MdSpanPrototype({ props: { content: curr.text } }));
          inlines.push(
            MdCodePrototype({ props: { content: curr.special.slice(1, -1) } })
          );
          curr.text = "";
          curr.special = "";
        }
        break;
      default:
        if (curr.special?.[0] === "[" || curr.special?.[0] === "`")
          curr.special += char;
        else curr.text += char;
        break;
    }
  }
  if (curr.special) clearSpecial();
  if (curr.text)
    inlines.push(MdSpanPrototype({ props: { content: curr.text } }));
  return inlines;
};
