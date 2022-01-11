import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function App({ title = 'Next Tailwind Articles', children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
