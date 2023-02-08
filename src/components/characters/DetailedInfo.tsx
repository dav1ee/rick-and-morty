import Link from 'next/link';

import { ROUTES } from '@utils/constants';
import { StatusCircle } from './StatusCircle';

interface DetailedInfoProps {
  originName: string;
  locationName: string;
  episodeName: string;
  originId: string;
  locationId: string;
  episodeId: string;
}

export const DetailedInfo: React.FC<Character & DetailedInfoProps> = ({
  name,
  gender,
  species,
  status,
  originName,
  locationName,
  episodeName,
  originId,
  locationId,
  episodeId,
}) => {
  return (
    <div className="character-details__info">
      <div className="character-details__info-item">
        <span className="character-details__info-label">Name:</span>
        <div>{name}</div>
      </div>

      <div className="character-details__info-item justify-between">
        <div>
          <span className="character-details__info-label">Gender:</span>
          <div>{gender}</div>
        </div>
        <div>
          <span className="character-details__info-label">Species:</span>
          <div>{species}</div>
        </div>
        <div>
          <span className="character-details__info-label">Status:</span>
          <div className="justify-between">
            {status}
            <StatusCircle status={status} />
          </div>
        </div>
      </div>

      <div className="character-details__info-item">
        <span className="character-details__info-label">Origin:</span>
        <div>
          {originId !== '' ? (
            <Link href={`${ROUTES.LOCATION}/${originId}`}>{originName}</Link>
          ) : (
            'Unknown'
          )}
        </div>
      </div>

      <div className="character-details__info-item">
        <span className="character-details__info-label">Last known location:</span>
        <div>
          {locationId !== '' ? (
            <Link href={`${ROUTES.LOCATION}/${locationId}`}>{locationName}</Link>
          ) : (
            'Unknown'
          )}
        </div>
      </div>

      <div className="character-details__info-item">
        <span className="character-details__info-label">First seen in:</span>
        <div>
          <Link href={`${ROUTES.EPISODE}/${episodeId}`}>{episodeName}</Link>
        </div>
      </div>
    </div>
  );
};
