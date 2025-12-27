import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <Link
      to={href}
      className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${className}`}
    >
      {children}
    </Link>
  );
}
