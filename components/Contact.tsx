import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Open_Sans, Poppins } from 'next/font/google'

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Footer from "./Footer";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400"],
  display: 'swap',
})



export default function Contact() {
  return (
    <section id="contactSection" className="text-white min-h-fit pt-20 pb-35" style={{backgroundColor: 'rgb(17, 18, 19)' }}>
      <div className="max-w-6xl mx-auto text-center space-y-8">
 
        <h1 className={`text-2xl font-bold tracking-wider ${openSans.className}`} style={{letterSpacing: '0.4rem'}}>CONTACT ME</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-300 leading-5 text-center">

            <div>
              <FontAwesomeIcon icon={faInstagram} className="text-6xl mb-2" />
              <p className={`font-bold ${openSans.className} text-lg`} style={{color: '#f99a47'}}>Follow Me</p>

              <div className={`${poppins.className} text-base`}style={{color: 'rgb(167, 159, 142)'}}>
                <a href="https://github.com/LanceMa03" target="_blank">
                  GitHub
                </a> 
                <br />
                <a href="https://www.instagram.com/1ance_ma/" target="_blank">
                  Instagram
                </a>              
              </div>
            </div>
            
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="text-6xl mb-2" />
              <p className={`font-bold ${openSans.className} text-lg`} style={{color: '#f99a47'}} >Email</p>
              <div className={`${poppins.className} text-base`}style={{color: 'rgb(167, 159, 142)'}}>
                <a href="mailto:ma718@purdue.edu">ma718@purdue.edu</a>
                <br />
                <a href="mailto:lancema507@gmail.com">lancema507@gmail.com</a>
              </div>
            </div>
           

            <div>
              <FontAwesomeIcon icon={faLinkedin} className="text-6xl mb-2" />
              <p className={`font-bold ${openSans.className} text-lg`} style={{color: '#f99a47'}}>Let's Connect</p>
              <a href="https://www.linkedin.com/in/lance-ma/" target="_blank" className={`${poppins.className} text-base`} style={{color: 'rgb(167, 159, 142)'}}>
                LinkedIn
              </a>
            </div>
            
        </div>
      </div>
 
    </section>
  );
}
