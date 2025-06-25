import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  icon: React.ReactNode;
};

export default function ButtonLink({ to, icon }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      type='button'
      className='bg-link-color p-2 rounded-lg cursor-pointer hover:bg-link-hover transition-colors duration-300 ease-in-out'
    >
      {icon}
    </Link>
  );
}
