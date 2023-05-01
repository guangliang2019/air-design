import adapter from "@/lib/adapter";
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
export { MdProps } from "./interface";
