import { Prototype, TemplateTree } from "@/lib/components/_interface";
import { defineComponent, h } from "vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderTemplate = (template?: TemplateTree, slots?: unknown) => {
  console.log(template);
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

const adapter = <Props>(prototype: Prototype<Props>, name: string) =>
  defineComponent<Props>({
    name,
    setup:
      (props, { slots }) =>
      () =>
        renderTemplate(prototype({ props: props }), slots),
  });

export default adapter;
