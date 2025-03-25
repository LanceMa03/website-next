'use client';

import { Open_Sans, Lora} from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ["400"],
  display: 'swap',
})

export default function Education() {
  return (
    <section id="educationSection" className="text-gray-100 py-20 px-6 w-full h-screen"
    style={{backgroundColor: 'rgb(36, 39, 41)'}}>
      <div className="max-w-7xl mx-auto" style={{color: 'rgb(205, 200, 191)'}}>
        <h1 className={`text-center text-2xl font-bold text-white tracking-wider mb-12 ${openSans.className}`}
        style={{letterSpacing: '0.4rem'}}>EDUCATION</h1>
        <div className="space-y-4">

          <h3 className={`text-2xl font-bold flex justify-between ${lora.className} p-0 m-0`}>
            Purdue University <span className="text-xl font-normal">August 2021 - Present</span>
          </h3>

          <p className="text-lg py-0">West Lafayette, Indiana</p>

          <p className={`p-0 m-0 text-lg ${lora.className}`}>
            <strong>Major:</strong> Computer Science
          </p>
          <p className={`p-0 text-lg ${lora.className}`}>
            <strong>Minor:</strong> Korean Studies
          </p>
          <h4 className={`underline mt-4 font-semibold text-lg ${lora.className}`}>Relevant Coursework</h4>

          <ul className={`font-normal list-disc list-inside ${lora.className}`}>
            <li>CS 40700 - Software Engineering Senior Project</li>
            <li>CS 38100 - Algorithms</li>
            <li>CS 35400 - Operating Systems</li>
            <li>CS 34800 - Information Systems (Databases)</li>
            <li>CS 30700 - Software Engineering</li>
            <li>CS 25200 - Systems Programming</li>
            <li>CS 25000 - Computer Architecture</li>
            <li>CS 24000 - Programming in C</li>
            <li>CS 18200 - Foundations of Computer Science (Discrete Math)</li>
            <li>CS 18000 - Problem Solving and Object-Oriented Programming</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
