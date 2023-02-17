import { fetchLocations } from '@utils/api';
import { ROUTES } from '@utils/constants';
import { LinkItem } from '@components';
import { Pagination } from '../../../shared/Pagination';

export const generateStaticParams = async () => {
  const locationsResponse = await fetchLocations();
  const pages = locationsResponse.data.info.pages;

  return Array.from({ length: pages }, (_, index: number) => index + 1).map((page) => ({
    page: page.toString(),
  }));
};

interface LocationsPageProps {
  params: {
    page: string;
  };
}

const LocationsPage = async ({ params }: LocationsPageProps) => {
  const [locationsResponse, locationsPages] = await Promise.all([
    await fetchLocations({ params: { page: +params.page } }),
    (await fetchLocations()).data.info.pages,
  ]);

  const locations = locationsResponse.data.results;

  return (
    <>
      <Pagination route={ROUTES.LOCATIONS} totalPages={locationsPages} currentPage={+params.page} />

      <div className="items-container">
        {locations.map((location) => (
          <LinkItem
            key={location.id}
            route={`${ROUTES.LOCATION}/${location.id}`}
            name={location.name}
          />
        ))}
      </div>
    </>
  );
};

export default LocationsPage;
