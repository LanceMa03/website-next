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
      <body>{children}</body>
    </html>
  );
}
