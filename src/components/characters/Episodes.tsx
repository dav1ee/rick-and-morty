import Link from 'next/link';

import { ROUTES } from '@utils/constants';

interface EpisodesProps {
  episodesIds: number[];
}

export const Episodes: React.FC<EpisodesProps> = ({ episodesIds }) => {
  return (
    <div className="episodes-list">
      {episodesIds.map((id) => (
        <Link className="episodes-list__item" key={id} href={`${ROUTES.EPISODE}/${id}`}>
          {id}
        </Link>
      ))}
    </div>
  );
};
