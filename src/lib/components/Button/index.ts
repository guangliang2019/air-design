import adapter from "@/lib/adapter";
import ButtonPrototype from "./Button";
import { ButtonProps } from "./interface";
import "./style";

const Button = adapter<ButtonProps>(ButtonPrototype, "a-button");

export default Button;
export { ButtonProps } from "./interface";
