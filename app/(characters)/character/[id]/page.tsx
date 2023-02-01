import { fetchCharacters, fetchCharacter } from '@utils/api';

export const generateStaticParams = async () => {
  const charactersCount = (await fetchCharacters()).data.info.count;

  return Array.from({ length: charactersCount }, (_, index: number) => index + 1).map((id) => ({
    id: id.toString(),
  }));
};

interface CharacterPageProps {
  params: {
    id: string;
  };
}

const CharacterPage = async ({ params }: CharacterPageProps) => {
  const characterResponse = await fetchCharacter({
    params: { id: +params.id },
  });

  const character = characterResponse.data;

  return (
    <div>
      <div>{character.name}</div>
      <div>{character.gender}</div>
    </div>
  );
};

export default CharacterPage;
