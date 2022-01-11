import React from 'react';

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className
          ? className
          : 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-200 text-white border-transparent'
      }
       border transition duration-300 focus:outline-none focus:ring focus:ring-teal-100  px-5 py-2.5 rounded-xl font-medium text-sm`}
    >
      {children}
    </button>
  );
}
