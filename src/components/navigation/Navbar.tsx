import { Link } from 'react-router-dom';
import { navItems } from '../../config/navigation';
import { siteConfig } from '../../config/site';
import NavLink from './NavLink.tsx';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </Link>

        <div className="flex items-center space-x-2">
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
