import Head from 'next/head';
import React from 'react';
import ApplicationLogo from '../components/ApplicationLogo';

export default function Guest({ header, title, children, cardClassName }) {
  return (
    <div className="flex antialiased tracking-tighter text-gray-800 items-center justify-center md:min-h-screen md:bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`${
          cardClassName ? cardClassName : 'lg:w-1/3'
        } w-full md:w-2/3`}
      >
        <div className="flex items-center justify-center mb-6">
          <ApplicationLogo />
        </div>
        <div className="bg-white md:rounded-2xl md:shadow-sm md:border outline-hidden ">
          <div className="px-6 py-3 border-b bg-gray-50/50">
            <h1 className="font-semibold capitalize">{header}</h1>
          </div>
          <div className="px-6 pt-3 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
