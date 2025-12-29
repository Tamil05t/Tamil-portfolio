import { Link } from 'react-router-dom';
import { navItems } from '../../config/navigation';
import { siteConfig } from '../../config/site';
import NavLink from './NavLink.tsx';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
