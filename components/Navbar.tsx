'use client';
import { useEffect, useState } from 'react';

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})


export default function Navbar() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    // Add scroll event listener and sets scroll to true after it scrolls 200px
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      console.log(windowHeight)
      const offset = window.scrollY;
      setScroll(offset > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sm:block hidden w-full fixed top-0 z-50 ${scroll ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <ul className={`flex justify-center gap-6 py-4 text-white font-bold text-sm tracking-widest ${openSans.className}`}>
        <li>
          <a href="#home" className={` ${scroll? 'hover:text-gray-300' : 'hover:text-orange-400'}  `} >
            HOME
          </a>
        </li>
        <li>
          <a href="#aboutme" className={` ${scroll? 'hover:text-gray-300' : 'hover:text-orange-400'}  `}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#travel" className={` ${scroll? 'hover:text-gray-300' : 'hover:text-orange-400'}  `}>
            TRAVELS
          </a>
        </li>
        <li>
          <a href="#educationSection" className={` ${scroll? 'hover:text-gray-300' : 'hover:text-orange-400'}  `}>
            EDUCATION
          </a>
        </li>
        <li>
          <a href="#projectsSection" className={` ${scroll? 'hover:text-gray-300' : 'hover:text-orange-400'}  `}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contactSection" className={` ${scroll? 'hover:text-gray-300' : 'hover:text-orange-400'}  `}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
