'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css';

const navItems = [
  { href: '/', label: '_hello' },
  { href: '/about', label: '_about-me' },
  { href: '/projects', label: '_projects' },
  { href: '/blogs', label: '_blogs' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <Link href="/" className="nav-last">raman-mishra</Link>
      <nav className="nav-tabs">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`tab ${pathname === href ? 'active nav-tab' : 'nav-tab'}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link href='contact' className={`tab ${pathname == 'contact' ? 'active nav-right nav-tab' : 'nav-right nav-tab'}`}>_contact-me</Link>
    </div>
  );
}
