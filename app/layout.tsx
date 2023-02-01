import { Space_Mono } from '@next/font/google';

import { Particle } from './shared/Particle';
import { FloatingButton } from './shared/FloatingButton';
import { Layout } from '@components';

import '../styles/globals.scss';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html className={spaceMono.className}>
      <head />
      <body>
        <Particle />
        <Layout.Header />
        <FloatingButton />

        <section className="page">
          <div className="container">{children}</div>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
