import { api } from './api';

interface FetchLocationsParams {
  params?: LocationFilter;
}

export const fetchLocations = async ({ params }: FetchLocationsParams = {}) => {
  return await api.get<Result<Location>>('/location', { params });
};

interface FetchLocationParams {
  params: {
    id: Location['id'];
  };
}

export const fetchLocation = async ({ params }: FetchLocationParams) => {
  return await api.get<Location>(`/location/${params.id}`);
};
