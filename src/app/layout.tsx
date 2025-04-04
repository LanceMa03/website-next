'use client';

import './globals.css'

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (

    <html lang="en">
      <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-..."
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="icon" href="/images/favicon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
