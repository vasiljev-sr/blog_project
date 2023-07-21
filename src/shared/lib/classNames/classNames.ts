type Mods = Record<string, boolean>;
export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  const positiveMods = Object.entries(mods)
    .filter(([_, condition]) => Boolean(condition))
    .map(([className]) => className);

  return [cls, ...additional.filter(Boolean), ...positiveMods].join(' ');
};
