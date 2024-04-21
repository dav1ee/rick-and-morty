import { fetchCharacters } from '@utils/api';
import { ROUTES } from '@utils/constants';
import { Character } from '@components';
import { Pagination } from '../../../src/components/Pagination';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

interface CharactersPageProps {
  searchParams?: {
    page: string;
    status: Character['status'];
    gender: Character['gender'];
    name: Character['name'];
  };
}

const CharactersPage = async ({ searchParams }: CharactersPageProps) => {
  const currentPage = +(searchParams?.page ?? 1);

  const filters = {
    ...(searchParams?.status && { status: searchParams.status }),
    ...(searchParams?.gender && { gender: searchParams.gender }),
    ...(searchParams?.name && { name: searchParams.name })
  };

  const [charactersResponse, charactersPages] = await Promise.all([
    await fetchCharacters({
      params: { page: currentPage, ...filters }
    }),
    (await fetchCharacters({ params: { ...filters } })).data.info.pages
  ]);

  const characters = charactersResponse.data.results;

  return (
    <>
      <div className="top-bar">
        <Character.Filter
          items={[
            {
              type: 'toggle',
              label: 'status',
              value: filters?.status ?? 'all',
              options: [
                {
                  label: 'all',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, status: undefined }
                  }
                },
                {
                  label: 'alive',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, status: 'alive' }
                  }
                },
                {
                  label: 'dead',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, status: 'dead' }
                  }
                }
              ]
            },

            {
              type: 'toggle',
              label: 'gender',
              value: filters?.gender ?? 'all',
              options: [
                {
                  label: 'all',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, gender: undefined }
                  }
                },
                {
                  label: 'male',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, gender: 'male' }
                  }
                },
                {
                  label: 'female',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, gender: 'female' }
                  }
                },
                {
                  label: 'genderless',
                  href: {
                    pathname: ROUTES.CHARACTERS,
                    query: { ...filters, gender: 'genderless' }
                  }
                }
              ]
            },

            {
              type: 'input',
              label: 'name',
              value: filters?.name ?? ''
            }
          ]}
        />

        <Pagination
          href={{ pathname: ROUTES.CHARACTERS, query: filters }}
          totalPages={charactersPages}
          currentPage={currentPage}
        />
      </div>

      {characters.length > 0 ? (
        <div className="characters-container">
          {characters.map((character) => (
            <Character.Card key={character.id} {...character} />
          ))}
        </div>
      ) : (
        <div className="characters-container--empty">
          Characters were not found
        </div>
      )}
    </>
  );
};

export default CharactersPage;
