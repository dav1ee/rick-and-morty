import { fetchLocation } from '@utils/api';

interface HeadProps {
  params: {
    id: string;
  };
}

const Head = async ({ params }: HeadProps) => {
  const locationResponse = await fetchLocation({
    params: { id: +params.id }
  });

  const locationName = locationResponse.data.name;

  return <title>{locationName}</title>;
};

export default Head;
