import Image from "next/image";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
