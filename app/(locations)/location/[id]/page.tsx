import { fetchLocations, fetchLocation, fetchMultipleCharacters } from '@utils/api';
import { getIdFromUrl } from '@utils/helpers';
import { Character, Location } from '@components';

export const generateStaticParams = async () => {
  const locationsCount = (await fetchLocations()).data.info.count;

  return Array.from({ length: locationsCount }, (_, index: number) => index + 1).map((id) => ({
    id: id.toString(),
  }));
};

interface LocationPageProps {
  params: {
    id: string;
  };
}

const LocationPage = async ({ params }: LocationPageProps) => {
  const locationResponse = await fetchLocation({
    params: { id: +params.id },
  });

  const location = locationResponse.data;
  const residentsIds = location.residents.map((url) => +getIdFromUrl('character', url));

  const charactersResponse = await fetchMultipleCharacters({
    params: { multiple: residentsIds },
  });

  const characters = charactersResponse.data;

  return (
    <>
      <Location.Info name={location.name} type={location.type} dimension={location.dimension} />

      {characters[0].name !== undefined && (
        <h1 className="title">
          {characters.length}
          {characters.length > 1 ? ' residents:' : ' resident:'}
        </h1>
      )}

      {characters[0].name !== undefined ? (
        <div className="characters-container">
          {characters.map((character) => (
            <Character.Card key={character.id} {...character} />
          ))}
        </div>
      ) : (
        <div className="characters-container--empty">There were no residents on this location</div>
      )}
    </>
  );
};

export default LocationPage;
