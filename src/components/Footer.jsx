import React from 'react';
import { FloatingDockDemo } from './FloatingDockDemo';

const Footer = () => {
  return (
    <>
      <div className="bg-black dark:bg-black">
        <div className="mx-auto max-w-full px-4 pt-8 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-white sm:text-3xl dark:text-white">
              Want us to email you with the latest blockbuster news?
            </strong>

            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email"> Email </label>

                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium text-black dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                />

                <button
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-white lg:text-left lg:text-lg dark:text-gray-400">
              MindBalance is dedicated to helping you achieve a balanced and mindful life. Our platform offers tools and resources to support your mental well-being journey.
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                {/* docker for social medias here */}
                <FloatingDockDemo />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="font-medium text-white dark:text-white"> Services </strong>
                <ul className="mt-6 space-y-1">
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Marketing</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Graphic Design</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">App Development</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Web Development</a></li>
                </ul>
              </div>

              <div>
                <strong className="font-medium text-white dark:text-white"> About </strong>
                <ul className="mt-6 space-y-1">
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">About</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Careers</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">History</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Our Team</a></li>
                </ul>
              </div>

              <div>
                <strong className="font-medium text-white dark:text-white"> Support </strong>
                <ul className="mt-6 space-y-1">
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">FAQs</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Contact</a></li>
                  <li><a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="#">Live Chat</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
            <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
              © IbadMoin 2025. All rights reserved.
              <br />
              Created with 
              <a href="#" className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">React Js</a>
             
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
