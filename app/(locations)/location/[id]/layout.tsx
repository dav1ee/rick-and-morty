import { Layout } from '@components';
import { ROUTES } from '@utils/constants';

interface LocationLayoutProps {
  children: React.ReactNode;
}

const LocationLayout = ({ children }: LocationLayoutProps) => {
  return (
    <>
      <Layout.GoBack name="Locations" route={`${ROUTES.LOCATIONS}/1`} />
      {children}
    </>
  );
};

export default LocationLayout;
