import Link from 'next/link';

interface LinkItemProps {
  route: string;
  name: string;
}

export const LinkItem: React.FC<LinkItemProps> = ({ route, name }) => (
  <Link className="link-item" href={route}>
    {name}
  </Link>
);
