import { fetchEpisodes, fetchEpisode, fetchMultipleCharacters } from '@utils/api';
import { getIdFromUrl } from '@utils/helpers';
import { Character, Episode } from '@components';

export const generateStaticParams = async () => {
  const episodesCount = (await fetchEpisodes()).data.info.count;

  return Array.from({ length: episodesCount }, (_, index: number) => index + 1).map((id) => ({
    id: id.toString(),
  }));
};

interface EpisodePageProps {
  params: {
    id: string;
  };
}

const EpisodePage = async ({ params }: EpisodePageProps) => {
  const episodeResponse = await fetchEpisode({
    params: { id: +params.id },
  });

  const episode = episodeResponse.data;
  const charactersIds = episode.characters.map((url) => +getIdFromUrl('character', url));

  const charactersResponse = await fetchMultipleCharacters({
    params: { multiple: charactersIds },
  });

  const characters = charactersResponse.data;

  return (
    <>
      <Episode.Info name={episode.name} airDate={episode.air_date} />

      <h1 className="title">{characters.length} characters:</h1>

      <div className="characters-container">
        {characters.map((character) => (
          <Character.Card key={character.id} {...character} />
        ))}
      </div>
    </>
  );
};

export default EpisodePage;
