import { Layout } from '@components';
import { ROUTES } from '@utils/constants';

interface EpisodeLayoutProps {
  children: React.ReactNode;
}

const EpisodeLayout = ({ children }: EpisodeLayoutProps) => {
  return (
    <>
      <Layout.GoBack name="Episodes" route={`${ROUTES.EPISODES}/1`} />
      {children}
    </>
  );
};

export default EpisodeLayout;
