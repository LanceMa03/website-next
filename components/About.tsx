'use client';

import { Open_Sans, Source_Sans_3 } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import AboutMore from './AboutMore';
import { AboutMain } from './AboutMain';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ["400"],
  display: 'swap',
})


export default function About() {

  const [showDetail, setShowDetail] = useState(false);

  return (

    <>
      {showDetail ? (
        <AboutMore onBack={() => setShowDetail(false)}/>
      ) : (
        <AboutMain onNext={() => setShowDetail(true)} />
      )}
    </>
  );
}
