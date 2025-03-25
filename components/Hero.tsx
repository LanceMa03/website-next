'use client';

import { Open_Sans, Libre_Baskerville } from 'next/font/google'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ["400"],
  display: 'swap',
})


export default function Hero() {
  return (
    <header
      id="home"
      className="h-screen flex flex-col justify-between items-center bg-cover bg-center text-white bg-[url('/images/bg2.jpg')]">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className={`text-8xl font-bold tracking-tight drop-shadow-lg ${openSans.className}`}>
          Lance <span className="text-white">Ma</span>
        </h1>

        <h2 className={`mt-4 text-xl text-gray-300 font-serif font-bold ${libreBaskerville.className}`}>
          Computer Science at Purdue University
        </h2>

        
      </div>
      <div className=" text-3xl mb-5 animate-bounce">
                <a href="#aboutme" className="text-white">
                  <FontAwesomeIcon  icon={faArrowDown} />
                </a>
              </div>

    </header>
  );
}
