import { Layout } from '@components';
import { ROUTES } from '@utils/constants';

interface CharacterLayoutProps {
  children: React.ReactNode;
}

const CharacterLayout = ({ children }: CharacterLayoutProps) => {
  return (
    <>
      <Layout.GoBack name="Characters" route={`${ROUTES.CHARACTERS}/1`} />
      {children}
    </>
  );
};

export default CharacterLayout;
