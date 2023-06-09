import adapter from "@/_lib/adapter";
import MdPrototype from "./Md";
import { MdProps } from "./interface";
import "./style";
import { PropType } from "vue";

const Md = adapter<MdProps>(MdPrototype, "a-md", {
  content: {
    type: String as PropType<string>,
    default: "",
  },
});

export default Md;
// export type { MdProps } from "./interface";
