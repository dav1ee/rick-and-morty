import { fetchCharacters } from '@utils/api';
import { ROUTES } from '@utils/constants';
import { Character } from '@components';
import { Pagination } from '../../../shared/Pagination';

export const generateStaticParams = async () => {
  const charactersResponse = await fetchCharacters();
  const pages = charactersResponse.data.info.pages;

  return Array.from({ length: pages }, (_, index: number) => index + 1).map((page) => ({
    page: page.toString(),
  }));
};

interface CharactersPageProps {
  params: {
    page: string;
  };
}

const CharactersPage = async ({ params }: CharactersPageProps) => {
  const [charactersResponse, charactersPages] = await Promise.all([
    await fetchCharacters({ params: { page: +params.page } }),
    (await fetchCharacters()).data.info.pages,
  ]);

  const characters = charactersResponse.data.results;

  return (
    <>
      <Pagination
        route={ROUTES.CHARACTERS}
        totalPages={charactersPages}
        currentPage={+params.page}
      />

      <div className="characters-container">
        {characters.map((character) => (
          <Character.Card key={character.id} {...character} />
        ))}
      </div>
    </>
  );
};

export default CharactersPage;
