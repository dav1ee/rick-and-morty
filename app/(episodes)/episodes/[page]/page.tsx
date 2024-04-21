import { fetchEpisodes } from '@utils/api';
import { ROUTES } from '@utils/constants';
import { LinkItem } from '@components';
import { Pagination } from '../../../../src/components/Pagination';

export const generateStaticParams = async () => {
  const episodesResponse = await fetchEpisodes();
  const pages = episodesResponse.data.info.pages;

  return Array.from({ length: pages }, (_, index: number) => index + 1).map(
    (page) => ({
      page: page.toString()
    })
  );
};

interface EpisodesPageProps {
  params: {
    page: string;
  };
}

const EpisodesPage = async ({ params }: EpisodesPageProps) => {
  const [episodesResponse, episodesPages] = await Promise.all([
    await fetchEpisodes({ params: { page: +params.page } }),
    (await fetchEpisodes()).data.info.pages
  ]);

  const episodes = episodesResponse.data.results;

  return (
    <>
      <Pagination
        href={{ pathname: ROUTES.EPISODES }}
        totalPages={episodesPages}
        currentPage={+params.page}
      />

      <div className="items-container">
        {episodes.map((episode) => (
          <LinkItem
            key={episode.id}
            route={`${ROUTES.EPISODE}/${episode.id}`}
            name={episode.name}
          />
        ))}
      </div>
    </>
  );
};

export default EpisodesPage;
