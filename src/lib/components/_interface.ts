export interface TemplateTree {
  element: keyof HTMLElementTagNameMap;
  children?: TemplateTree[] | number | string;
  attributes?: Partial<HTMLElement>;
}

export interface Controller<Props, States = undefined> {
  props: Props;
  states?: States;
}

export type Prototype<Props, States = undefined> = (
  controller: Controller<Props, States>
) => TemplateTree;
