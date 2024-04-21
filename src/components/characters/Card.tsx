import Link from 'next/link';
import Image from 'next/image';

import { ROUTES } from '@utils/constants';
import { getIdFromUrl } from '@utils/helpers';

export const Card: React.FC<Character> = ({
  id,
  image,
  name,
  species,
  status,
  location
}) => {
  const locationId = getIdFromUrl('location', location.url);

  return (
    <article className="character-card">
      <Image
        className="character-card__img"
        src={image}
        alt={name}
        width={220}
        height={220}
        priority
      />

      <div className="character-card__info">
        <div className="character-card__info-item">
          <Link
            className="character-card__info-name"
            href={`${ROUTES.CHARACTER}/${id}`}
          >
            {name}
          </Link>
        </div>

        <div className="character-card__info-item">
          <div>
            <span className="character-card__info-label">Species:</span>
            <div>{species}</div>
          </div>
          <div>
            <span className="character-card__info-label">Status:</span>
            <div>{status}</div>
          </div>
        </div>

        <div className="character-card__info-item">
          <span className="character-card__info-label">
            Last known location:
          </span>
          {location.url.length > 0 ? (
            <Link href={`${ROUTES.LOCATION}/${locationId}`}>
              {location.name}
            </Link>
          ) : (
            <div>Unknown</div>
          )}
        </div>
      </div>
    </article>
  );
};
