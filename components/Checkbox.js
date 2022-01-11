import React from 'react';

export default function Checkbox({ label, forInput, ...props }) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="text-teal-500 border-teal-300 rounded focus:ring-white"
        type="checkbox"
        {...props}
      />
      <label htmlFor={forInput} className="select-none">
        {label}
      </label>
    </div>
  );
}
