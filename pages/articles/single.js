import Head from 'next/head';
import React from 'react';
import App from '../../layouts/App';
import Header from '../../components/Header';
import ArticleBody from '../../components/ArticleBody';

export default function Single() {
  return (
    <div>
      <Head>
        <title>The Best Article In The World</title>
      </Head>
      <Header>
        <Header.Body>
          <Header.Title>The Best Article In The World</Header.Title>
          <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
            In quis nulla cupidatat aute. Ex proident minim nulla laboris eu
            veniam consectetur aliqua. Reprehenderit excepteur anim nisi duis
            veniam. Mollit laboris velit eu cillum aliqua labore mollit amet
            laborum velit anim.
          </p>
        </Header.Body>
      </Header>
      <div className="container">
        <ArticleBody />
      </div>
    </div>
  );
}

Single.getLayout = (page) => <App children={page} />;
