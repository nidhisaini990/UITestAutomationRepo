export const stringUtils = {
  trim: (str: string): string => str.trim(),
  isEmpty: (str: string): boolean => !str || str.trim().length === 0,
  capitalize: (str: string): string => str.charAt(0).toUpperCase() + str.slice(1),
  camelCase: (str: string): string => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0) return '';
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, '');
  },
  containsIgnoreCase: (str: string, search: string): boolean =>
    str.toLowerCase().includes(search.toLowerCase()),
};
