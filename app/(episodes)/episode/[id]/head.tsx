import { fetchEpisode } from '@utils/api';

interface HeadProps {
  params: {
    id: string;
  };
}

const Head = async ({ params }: HeadProps) => {
  const episodeResponse = await fetchEpisode({
    params: { id: +params.id },
  });

  const episodeName = episodeResponse.data.name;

  return <title>{episodeName}</title>;
};

export default Head;
