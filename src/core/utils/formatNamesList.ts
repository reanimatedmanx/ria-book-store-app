export const renderAuthorNames = (names: string[]) =>
  names.map((a, i) => (i < names.length - 1 ? `${a}, ` : a));
