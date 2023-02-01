'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { ROUTES } from '@utils/constants';

const links = [
  { label: 'Characters', path: `${ROUTES.CHARACTERS}/1` },
  { label: 'Locations', path: `${ROUTES.LOCATIONS}/1` },
  { label: 'Episodes', path: `${ROUTES.EPISODES}/1` },
];

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname?.split('/')[1] === path.toLowerCase();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="logo" href={ROUTES.ROOT}>
            <Logo />
          </Link>

          <nav className="nav">
            <ul className="nav-list">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  path={link.path}
                  label={link.label}
                  isActive={isActive(link.label)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
