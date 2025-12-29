import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
          isActive
            ? 'text-white border-blue-500'
            : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
        }`
      }
    >
      {children}
    </RouterNavLink>
  );
}
