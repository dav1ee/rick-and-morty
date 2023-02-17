import Image from 'next/image';

import { fetchCharacters, fetchCharacter, fetchEpisode } from '@utils/api';
import { getIdFromUrl } from '@utils/helpers';
import { Character } from '@components';

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

  const originId = getIdFromUrl('location', character.origin.url);
  const locationId = getIdFromUrl('location', character.location.url);
  const episodeId = getIdFromUrl('episode', character.episode[0]);
  const episodesIds = character.episode.map((url) => +getIdFromUrl('episode', url));

  const episodeResponse = await fetchEpisode({ params: { id: +episodeId } });
  const episodeName = episodeResponse.data.name;

  return (
    <div className="character-details">
      <Image
        className="character-details__img"
        src={character.image}
        alt={character.name}
        width={400}
        height={400}
        priority
      />

      <div className="character-details__right">
        <Character.DetailedInfo
          originName={character.origin.name}
          locationName={character.location.name}
          episodeName={episodeName}
          originId={originId}
          locationId={locationId}
          episodeId={episodeId}
          {...character}
        />

        <span className="character-details__info-label character-details__info-label--animated">
          Episodes:
        </span>
        <Character.Episodes episodesIds={episodesIds} />
      </div>
    </div>
  );
};

export default CharacterPage;
