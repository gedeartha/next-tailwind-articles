import Link from 'next/link';
import React from 'react';

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="md:text-sm font-medium lg:text-tiny px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg">
        {children}
      </a>
    </Link>
  );
}
