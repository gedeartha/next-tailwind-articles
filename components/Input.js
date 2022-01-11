import React from 'react';

export default function Input({ type, ...props }) {
  return (
    <input
      type={type ? type : 'text'}
      {...props}
      className="border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-200 transition duration-200 shadow-sm w-full"
    />
  );
}
