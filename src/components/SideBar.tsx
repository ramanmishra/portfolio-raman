'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-48 h-screen bg-gray-900 text-white flex flex-col p-4 space-y-4 fixed left-0 top-0">
            <h1 className="text-xl font-bold mb-6">My Portfolio</h1>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={classNames(
                        'hover:text-blue-400 transition',
                        pathname === link.href ? 'text-blue-400 font-semibold' : 'text-white'
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </aside>
    );
}
