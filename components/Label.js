import React from 'react';

export default function Label({ forInput, children }) {
  return (
    <label htmlFor={forInput} className="block text-gray-700 mb-1 capitalize">
      {children}
    </label>
  );
}
