import Link from 'next/link';

interface NavLinkProps {
  path: string;
  label: string;
  isActive: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ path, label, isActive }) => {
  return (
    <li className="nav-list__item">
      <Link className={`nav-list__link ${isActive ? 'active' : ''}`} href={path}>
        {label}
      </Link>
    </li>
  );
};
