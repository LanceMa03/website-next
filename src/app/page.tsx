'use client';

import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import dynamic from 'next/dynamic';

export default function Home() {

  const TravelMap = dynamic(() => import('../../components/Map'), {
    ssr: false,
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TravelMap />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
