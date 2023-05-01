const option = {
  prefixCls: "a",
};

/**
 * 获取添加了统一组件类名前缀后的组件类名
 * @param cls 组件类名
 * @returns 添加前缀后的类名
 */
export const getPrefixCls = (cls: string) =>
  option.prefixCls ? `${option.prefixCls}-${cls}` : cls;
