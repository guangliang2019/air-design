import { Prototype, TemplateTree } from "@/lib/components/_interface";
import { defineComponent, h, PropType, reactive } from "vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderTemplate = (template?: TemplateTree, slots?: unknown) => {
  if (!template) return null;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (template.element === "slot") return h("div", slots?.default?.());
  return h(
    template.element,
    {
      ...template.attributes,
    },
    typeof template.children === "object"
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        template.children.map((child) => renderTemplate(child, slots))
      : template.children
  );
};

const adapter = <Props>(
  prototype: Prototype<Props>,
  name: string,
  props: {
    [P in keyof Props]: {
      type: PropType<Props[P]>;
      default?: Props[P];
      require?: boolean;
    };
  }
) =>
  defineComponent({
    name,
    props,
    setup:
      (props, { slots }) =>
      () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return renderTemplate(prototype({ props: reactive(props) }), slots);
      },
  });

export default adapter;
