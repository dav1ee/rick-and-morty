import { api } from './api';

interface FetchCharactersParams {
  params?: CharacterFilter;
}

export const fetchCharacters = async ({ params }: FetchCharactersParams = {}) => {
  try {
    return await api.get<Result<Character>>('/character', { params });
  } catch (err) {
    return {
      data: {
        info: {
          pages: 0,
          count: 0,
        },
        results: [],
      },
    };
  }
};

interface FetchCharacterParams {
  params: {
    id: Character['id'];
  };
}

export const fetchCharacter = async ({ params }: FetchCharacterParams) => {
  return await api.get<Character>(`/character/${params.id}`);
};

interface FetchMultipleCharactersParams {
  params: {
    multiple: Character['id'][];
  } & CharacterFilter;
}

export const fetchMultipleCharacters = async ({ params }: FetchMultipleCharactersParams) => {
  const multipleCharactersResponse = await api.get<Character | Character[]>(
    `/character/${params.multiple}`,
    { params },
  );

  if (Array.isArray(multipleCharactersResponse.data)) {
    const { data } = multipleCharactersResponse;
    return { ...multipleCharactersResponse, data };
  }

  return { ...multipleCharactersResponse, data: [multipleCharactersResponse.data] };
};
