export const getRandomCharacters = (length: number, count: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * count));
};
