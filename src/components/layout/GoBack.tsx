import Link from 'next/link';

interface GoBackProps {
  name: string;
  route: string;
}

export const GoBack: React.FC<GoBackProps> = ({ name, route }) => (
  <Link className="go-back" href={route}>
    ← {name}
  </Link>
);
