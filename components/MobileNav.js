// // Open Navigation with useState

// import React, { useState } from 'react';
// import ResponsiveLink from './ResponsiveLink';

// export default function MobileNav() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="block md:hidden flex items-center justify-between py-2.5 px-4 border-b border-gray-700">
//       <a href="#" className="text-white font-semibold uppercase">
//         Brand
//       </a>
//       <div
//         onClick={() => setOpen(false)}
//         className={`${
//           open ? 'block' : 'hidden'
//         } h-full w-full bg-transparent absolute inset-0`}
//       ></div>
//       <button
//         onClick={() => setOpen((open) => !open)}
//         className="focus:outline-none"
//       >
//         {/* prettier-ignore */}
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>
//       <div
//         className={`${
//           open ? 'block' : 'hidden'
//         } bg-white absolute right-0 top-0 mr-12 mt-4 py-1 rounded-lg w-56 overflow-hidden`}
//       >
//         <ResponsiveLink href="#">Home</ResponsiveLink>
//         <ResponsiveLink href="#">Articles</ResponsiveLink>
//         <ResponsiveLink href="#">Gallery</ResponsiveLink>
//         <ResponsiveLink href="#">About</ResponsiveLink>
//         <ResponsiveLink href="#">Contact</ResponsiveLink>
//         <div className="w-full h-px bg-gray-300 my-1"></div>
//         <ResponsiveLink href="#">Sign in</ResponsiveLink>
//         <ResponsiveLink href="#">Sign up</ResponsiveLink>
//       </div>
//     </div>
//   );
// }

// Open Navigation with Headless UI -> Can close by Esc

import React, { Fragment } from 'react';
import ResponsiveLink from './ResponsiveLink';
import { Menu, Transition } from '@headlessui/react';
import Line from './Line';

export default function MobileNav() {
  const auth = {
    check: true,
    user: {
      name: 'Gede Artha',
    },
  };

  return (
    <Menu
      as={'div'}
      className="w-full md:hidden flex items-center justify-between py-2.5 px-4 border-b border-gray-700"
    >
      <a href="/" className="text-white font-semibold uppercase">
        Brand
      </a>
      <Menu.Button className="focus:outline-none">
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="bg-white absolute right-0 top-0 mr-12 mt-3 py-1 rounded-lg w-56 overflow-hidden border shadow-sm"
        >
          <ResponsiveLink href="/">Home</ResponsiveLink>
          <ResponsiveLink href="/articles">Articles</ResponsiveLink>
          <ResponsiveLink href="#">Gallery</ResponsiveLink>
          <ResponsiveLink href="#">About</ResponsiveLink>
          <ResponsiveLink href="#">Contact</ResponsiveLink>
          {auth.check ? (
            <>
              <Line />
              <ResponsiveLink href="#">Dashboard</ResponsiveLink>
              <Line />
              <ResponsiveLink href="#">{auth.user.name}</ResponsiveLink>
              <ResponsiveLink href="#">Account Settings</ResponsiveLink>
              <Line />
              <ResponsiveLink href="#">Help</ResponsiveLink>
              <Line />
              <ResponsiveLink href="/login">Logout</ResponsiveLink>
            </>
          ) : (
            <>
              <Line />
              <ResponsiveLink href="/login">Sign in</ResponsiveLink>
              <ResponsiveLink href="/register">Sign up</ResponsiveLink>
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
