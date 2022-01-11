import React, { useRef, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

import App from '../layouts/App';

import Slider from '../components/slider';
import Swiper from '../components/swiper/index';

export default function Home() {
  const services = [
    {
      title: 'Ad enim incididunt ullamco.',
      description:
        'Reprehenderit enim eiusmod sit aliquip fugiat aute dolor voluptate enim proident.',
      image:
        'https://images.unsplash.com/photo-1531975474574-e9d2732e8386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Ad nulla tempor deserunt.',
      description:
        'Commodo est enim laboris sint aliquip deserunt eu labore dolore et veniam reprehenderit esse.',
      image:
        'https://images.unsplash.com/photo-1607427225127-a4ae1d4b050c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    },
  ];

  const projects = [
    {
      title: 'Esse consectetur aute in anim.',
      details:
        'In deserunt officia do ex adipisicing reprehenderit amet consequat aliqua dolore.',
      href: 'https://www.google.com/',
      image:
        'https://images.unsplash.com/photo-1641273272565-c779149efd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    },
    {
      title: 'Anim cillum dolor ad cupidatat cillum.',
      details:
        'Est sint reprehenderit officia Lorem veniam. Sint aute velit id eu commodo duis.',
      href: 'https://www.google.com/',
      image:
        'https://images.unsplash.com/photo-1639402477084-7e98f693c98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
      title: 'Id cupidatat non excepteur',
      details:
        'Elit quis nostrud eu sunt mollit cillum dolore ad magna ipsum laboris ad veniam.',
      href: 'https://www.google.com/',
      image:
        'https://images.unsplash.com/photo-1639987487751-7ff90aeb3268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <>
      <Header>
        <Header.Body>
          <Header.Title className="text-transparent bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text inline-block">
            {/* <Header.Title className="text-transparent bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-500 bg-clip-text inline-block"> */}
            New Revolution
          </Header.Title>
          <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            <a
              href="#"
              className="no-underline decoration-teal-500 text-teal-400 font-medium"
            >
              Dolorem quam
            </a>
            , recusandae quis dolorum veritatis nulla, nemo consequuntur
            temporibus quisquam expedita libero est facere ipsum laboriosam
            eveniet itaque. Rem, dicta temporibus?
          </p>
          <a
            href="#"
            className="bg-white hover:bg-gray-50 hover:text-teal-600 transition duration-300 text-gray-900 px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-tiny rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400"
          >
            Browse
          </a>
        </Header.Body>
      </Header>
      <div className="container">
        <h1 className="font-black text-xl md:text-3xl text-center mb-12">
          Ea exercitation magna duis sint.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-x-8 xl:gap-x-16 sm:gap-y-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border hover:shadow-lg"
            >
              <img
                className="shadow hover:shadow-lg transition-shadow duration-300 aspect-[4/2] w-full object-cover object-center mb-4"
                src={service.image}
              />
              <div className="px-5 pb-5">
                <h1 className="font-semibold text-sm md:text-lg mb-2">
                  {service.title}
                </h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Slider />

      <div className="min-h-screen bg-gray-100 mt-12 py-12">
        <h1 className="font-black text-xl md:text-3xl text-center">
          Ea exercitation magna duis sint.
        </h1>
        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => {
            let order1;

            if (index % 2 === 1) {
              order1 = true;
            } else {
              order1 = false;
            }

            return (
              <div className=" rounded-2xl overflow-hidden shadow-md mt-12">
                <div className="grid grid-cols-2">
                  <div className="bg-white p-12 flex flex-col justify-center order-2">
                    <article class="prose prose-sm">
                      <h1>{project.title}</h1>
                      <p>{project.details}</p>
                      <Button className="bg-white hover:bg-teal-500 focus:ring-teal-200 text-black border-teal-500 hover:text-white">
                        View Detail
                      </Button>
                    </article>
                  </div>
                  <div className={order1 ? 'order-1' : 'order-3'}>
                    <img
                      className="object-cover object-center aspect-[4/3] w-full"
                      src={project.image}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-8 flex justify-end">
            <Button>View more projects</Button>
          </div>
        </div>
      </div>

      <Swiper />
    </>
  );
}

Home.getLayout = (page) => <App title="Next Tailwind" children={page} />;
