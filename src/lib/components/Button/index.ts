import adapter from "@/lib/adapter";
import { PropType } from "vue";
import ButtonPrototype from "./Button";
import { ButtonProps } from "./interface";
import "./style";

const Button = adapter<ButtonProps>(ButtonPrototype, "a-button", {
  type: {
    type: String as PropType<"primary">,
    default: "primary",
  },
});

export default Button;
export { ButtonProps } from "./interface";
