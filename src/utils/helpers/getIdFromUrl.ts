export const getIdFromUrl = (entity: string, url: string): string => {
  return url.replace(`https://rickandmortyapi.com/api/${entity}/`, '');
};
