import Link from 'next/link';

import { fetchCharacters, fetchMultipleCharacters, fetchEpisodes } from '@utils/api';
import { getRandomCharacters } from '@utils/helpers';
import { ROUTES } from '@utils/constants';
import { Character } from '@components';

const HomePage = async () => {
  const charactersCount = (await fetchCharacters()).data.info.count;
  const charactersIds = getRandomCharacters(4, charactersCount);

  const [charactersResponse, episodesResponse] = await Promise.all([
    await fetchMultipleCharacters({
      params: { multiple: charactersIds },
    }),
    await fetchEpisodes(),
  ]);

  const characters = charactersResponse.data;
  // locations
  const episodesCount = episodesResponse.data.info.count;

  return (
    <>
      <div className="characters-container">
        {characters.map((character) => (
          <Character.Card key={character.id} {...character} />
        ))}
      </div>

      <ul className="bottom-nav">
        <li className="bottom-nav__item">
          <Link className="bottom-nav__link" href={`${ROUTES.CHARACTERS}/1`}>
            characters: {charactersCount}
          </Link>
        </li>
        <li className="bottom-nav__item">
          <Link className="bottom-nav__link" href={`${ROUTES.LOCATIONS}/1`}>
            locations: 126
          </Link>
        </li>
        <li className="bottom-nav__item">
          <Link className="bottom-nav__link" href={`${ROUTES.EPISODES}/1`}>
            episodes: {episodesCount}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
