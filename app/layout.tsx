import { Space_Mono } from '@next/font/google';

import { Layout } from '@components';
import { FloatingButton } from './shared/FloatingButton';
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
        <Layout.Header />

        <section className="page">
          <div className="container">{children}</div>
        </section>

        <FloatingButton />
      </body>
    </html>
  );
};

export default RootLayout;
