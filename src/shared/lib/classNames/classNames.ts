import { Mods } from 'shared/lib/types/common';

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  const positiveMods = Object.entries(mods)
    .filter(([_, condition]) => Boolean(condition))
    .map(([className]) => className);

  return [cls, ...additional.filter(Boolean), ...positiveMods].join(' ');
};
