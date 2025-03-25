'use client ';

import { Open_Sans, Source_Sans_3 } from 'next/font/google'

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
  return (
    <section id="aboutme" className=" {backgroundColor: rgb(25, 27, 28))} text-gray-200 py-20 px-6 w-full h-full">
      <div className="max-w-7xl mx-auto">

        <h1 className={`text-center text-2xl font-bold mb-12 ${openSans.className}`}
        style={{letterSpacing: '0.4rem'}}>
          ABOUT ME
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-x-4">
          <div className="basis-1/3 md:shrink-0 space-y-4 text-lg flex-1">
            <div>
              <strong>이름:</strong> 랑스 마
            </div>
            <div>
              <strong>학교:</strong> 퍼듀 대학교
            </div>
            <div>
              <strong>나이:</strong> 21 살
            </div>
            <div>
              <strong>고향:</strong> 샌프란시스코, 캘리포니아
            </div>
            <img src="/images/pfp.jpg" alt="Profile" className="w-72 h-72 object-cover rounded-2xl mt-6" />
          </div>

          <div className={`basis-2/3 text-lg leading-relaxed flex-1 space-y-4 text-justify ${sourceSans.className} font-sans`}>
           
              <p>I'm a student at Purdue University majoring in Computer Science with a minor in Korean Studies. Growing up in San Francisco,
                    I've been fascinated with the growing tech industry in front of my eyes. This, combined with my passion for
                    computers and video games, I knew that I wanted to pursue my degree in computer science. 
                    I'm interested in software development and exploring how machine learning and AI can shape the future and
                    impact people's day to day lives. 
                </p>
    
                <p>Outside the classroom, I'm apart of The Data Mine where I am working with Lockheed Martin to develop a Generative Adversarial Network that uses AI/ML to conduct automated cyber anonomaly detection. Additionally, I'm apart of VIP on the Education Technology Development team where I am assisting with
                    the development of an "Intro to Physical Computing" course.
                </p>
    
                <p>I will also be a Software Engineering Intern at Capital One this summer.</p>

                <p>You can usually find me in my room coding away into the night while listening to my favorite
                    playlists on Spotify. If you don’t find me coding, I'll probably be out and about travelling to a new city, on the beach watching the sunset.
                    Besides my love for coding and coffee, I also enjoy playing the occasional match of League of Legends and binge watching the latest hit k-drama(s) on Netflix.
                </p>
    
                <p>I am always seeking new opportunities and ways to apply my skills. If you want to get in touch, feel free to {' '}
                    <a href="#contactSection" className="font-bold">
                        reach out
                    </a>
                   .
                </p>


          </div>
        </div>
      </div>
    </section>
  );
}
