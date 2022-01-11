import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Title = ({ className, children }) => (
  <h1 className={`${className ? className : ''} text-xl md:text-3xl font-bold`}>
    {children}
  </h1>
);

const Body = ({ children }) => (
  <div className="text-white py-4 sm:py-8 md:py-16">{children}</div>
);

const Header = ({ children }) => {
  return (
    <div>
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-4 sm:mb-12">
        <MobileNav />
        <DesktopNav />
        <div className="container">
          <div className="w-full lg:w-2/3">{children}</div>
        </div>
      </div>
    </div>
  );
};

Header.Title = Title;

Header.Body = Body;

export default Header;
