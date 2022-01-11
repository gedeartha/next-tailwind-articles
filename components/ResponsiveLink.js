// // Open Navigation with useState

// import React from 'react';

// export default function ResponsiveLink({ href, children }) {
//   return (
//     <a
//       href={href}
//       className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block"
//     >
//       {children}
//     </a>
//   );
// }

// Open Navigation with Headless UI

import React from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

export default function ResponsiveLink({ href, children }) {
  return (
    <Menu.Item>
      <Link href={href}>
        <a className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">
          {children}
        </a>
      </Link>
    </Menu.Item>
  );
}
