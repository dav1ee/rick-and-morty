import { fetchCharacters } from '@utils/api';
import { ROUTES } from '@utils/constants';
import { Character } from '@components';
import { Pagination } from '../../shared/Pagination';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

interface CharactersPageProps {
  searchParams?: {
    page: string;
  };
}

const CharactersPage = async ({ searchParams }: CharactersPageProps) => {
  const currentPage = +(searchParams?.page ?? 1);

  const [charactersResponse, charactersPages] = await Promise.all([
    await fetchCharacters({
      params: { page: currentPage },
    }),
    (await fetchCharacters()).data.info.pages,
  ]);

  const characters = charactersResponse.data.results;

  return (
    <>
      <div className="top-bar">
        <Pagination
          route={ROUTES.CHARACTERS}
          totalPages={charactersPages}
          currentPage={currentPage}
        />
      </div>

      <div className="characters-container">
        {characters.map((character) => (
          <Character.Card key={character.id} {...character} />
        ))}
      </div>
    </>
  );
};

export default CharactersPage;
