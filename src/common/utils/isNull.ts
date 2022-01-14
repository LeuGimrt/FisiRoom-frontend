export const nullToString = (data: string | null) => {
  if (data === null || data === undefined) return '';
  return data.toString();
};
