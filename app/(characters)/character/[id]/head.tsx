import { fetchCharacter } from '@utils/api';

interface HeadProps {
  params: {
    id: string;
  };
}

const Head = async ({ params }: HeadProps) => {
  const characterResponse = await fetchCharacter({
    params: { id: +params.id }
  });

  const characterName = characterResponse.data.name;

  return <title>{characterName}</title>;
};

export default Head;
