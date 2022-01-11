import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header';
import App from '../../layouts/App';

export default function Index() {
  const posts = [
    {
      title: 'Lorem velit ipsum ullamco officia.',
      create_at: '04 January, 2022',
      author: 'artha',
      picture:
        'https://images.unsplash.com/photo-1640964488903-9b85450f1b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Pariatur nostrud velit consectetur sint.',
      create_at: '04 January, 2022',
      author: 'artha',
      picture:
        'https://images.unsplash.com/photo-1640818733837-dd974cdae78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
    {
      title: 'In consequat ipsum elit ipsum anim labore.',
      create_at: '04 January, 2022',
      author: 'artha',
      picture:
        'https://images.unsplash.com/photo-1518022525094-218670c9b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Do amet sit fugiat aliqaaaua ut.',
      create_at: '04 January, 2022',
      author: 'artha',
      picture:
        'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Lorem eu consectetur quis minim.',
      create_at: '04 January, 2022',
      author: 'artha',
      picture:
        'https://images.unsplash.com/photo-1641221750080-24949785b28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Quis adipisicing proident aute aute fugiat.',
      create_at: '04 January, 2022',
      author: 'artha',
      picture:
        'https://images.unsplash.com/photo-1641219497861-5c0a245abcd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];

  return (
    <>
      <Header>
        <Header.Body>
          <Header.Title>Our Articles</Header.Title>
          <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
            Recusandae quis dolorum veritatis nulla, nemo consequuntur
            temporibus quisquam expedita libero est facere ipsum laboriosam
            eveniet itaque. Rem, dicta temporibus?
          </p>
        </Header.Body>
      </Header>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-x-16 sm:gap-y-16">
          {posts.map((post, index) => (
            <div key={index}>
              <Link href="/articles/single">
                <a>
                  <img
                    className="shadow hover:shadow-lg transition-shadow duration-300 rounded-2xl mb-4 aspect-[4/2.333] w-full object-cover object-center"
                    src={post.picture}
                    alt={post.title}
                  />
                </a>
              </Link>
              <Link href="/articles/single">
                <a>
                  <h1 className="mb-2 sm:mb-4 font-semibold text-black">
                    {post.title}
                  </h1>
                </a>
              </Link>
              <div className="flex items-center font-mono justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.create_at}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Index.getLayout = (page) => <App title="Our Articles" children={page} />;
