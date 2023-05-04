import { Prototype, TemplateTree } from "@/_lib/components/_interface";
import { defineComponent, h, PropType } from "vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderTemplate = (template?: TemplateTree, slots?: unknown) => {
  if (!template) return null;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (template.element === "slot") return h("div", slots?.default?.());
  if (template.attributes?.className)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    template.attributes.class = template.attributes?.className;
  return h(
    template.element,
    { ...template.attributes },
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
    setup: (props, { slots, attrs }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const component = renderTemplate(prototype({ props }), slots, attrs);
      return () => component;
    },
  });

export default adapter;
