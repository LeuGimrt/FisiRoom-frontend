export const nullToString = (data: string | null | undefined) => {
  if (data === null || data === undefined) return '';
  return data.toString();
};
