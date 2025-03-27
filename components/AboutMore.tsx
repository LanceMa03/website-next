'use client';

import { Open_Sans } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})

type AboutMoreProps = {
  onBack: () => void;
}

const images = [
  '/images/pfp.jpg',
  './images/bg2.jpg',
]




export default function AboutMore({onBack}: AboutMoreProps) {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Adjust as needed
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
    };

    return (

      <section id="aboutme" className=" {backgroundColor: rgb(25, 27, 28))} text-gray-200 py-20 px-6 w-full h-full">

        <div className="max-w-7xl mx-auto">
        <h1 className={`text-center text-2xl font-bold mb-12 ${openSans.className}`}
            style={{letterSpacing: '0.4rem'}}>
            ABOUT ME
            </h1>
            
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img src={src} alt={`Slide ${idx}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </Slider>
        </div>

    <button onClick={onBack}>Back</button>
      </section>
    );
  }
  