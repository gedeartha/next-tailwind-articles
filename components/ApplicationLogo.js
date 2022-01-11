import React from 'react';

export default function ApplicationLogo() {
  return (
    <a href="/" className="inline-flex items-center gap-x-2">
      {/* prettier-ignore */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
      <h1 className="text-xl font-semibold tracking-tighter">
        <span className="text-teal-500">Jan</span>
        <span className="text-gray-500">uary</span>
      </h1>
    </a>
  );
}
