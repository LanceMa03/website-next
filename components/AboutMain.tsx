'use client';

import Image from 'next/image';
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

type AboutMainProps = {
    onNext: () => void;
};

export function AboutMain({ onNext }: AboutMainProps) {
    return (
    <section id="aboutme" className=" {backgroundColor: rgb(25, 27, 28))} text-gray-200 py-20 px-6 w-full h-full">
        <div className="max-w-7xl mx-auto">

            <h1 className={`text-center text-2xl font-bold mb-12 ${openSans.className}`}
            style={{letterSpacing: '0.4rem'}}>
            ABOUT ME
            </h1>

            <div className="flex flex-col md:flex-row items-start gap-x-4">

            <div className={`basis-1/3 md:shrink-0 space-y-4 text-lg flex-1 ${sourceSans.className}`}>
                <div>
                <strong>이름:</strong> 랑스 마
                </div>
                <div>
                <strong>최애 라면:</strong> 신라면 🔥
                </div>
                <div>
                <strong>최애 카페 음료:</strong> 말차 라떼 🍵
                </div>
                <div>
                <strong>성격:</strong> 조용하지만 따뜻한 사람 😊
                </div>
                
                
                <Image src="/images/pfp.jpg" width={500} height={500} alt="Profile" className="w-72 h-72 object-cover rounded-2xl mt-6" />

            </div>

            <div className={`basis-2/3 text-lg leading-relaxed flex-1 space-y-4 text-justify ${sourceSans.className} font-sans`}>
            
                <p>I&apos;m a student at Purdue University majoring in Computer Science with a minor in Korean Studies. Growing up in the Bay Area,
                        I&apos;ve been fascinated with the evolving tech industry in front of my eyes. This, combined with my interest in video games and problem-solving skills is what drew me to computer science. 
                        I&apos;m interested in software development and exploring how machine learning and AI can shape the future and impact people&apos;s day to day lives. 
                    </p>
        
                    <p>Outside the classroom, I&apos;m currently working with The Data Mine to develop a GAN-based anonomaly detection framework to detect anomalies. Additionally, I&apos;m apart of VIP on the Education Technology Development team where I am working on the development of an &quot;Intro to Physical Computing&quot; course focused on embedded systems and microcontrollers. 
                    </p>
        
                    <p>I will also be a Software Engineering Intern at Capital One this summer.</p>

                    <p>You can usually find me in my room mindlessly scrolling into night while listening to my favorite
                        playlists on Spotify. Otherwise, I&apos;ll probably be out and about travelling to a new city, going for a walk, or watching the sunset somewhere.
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

 
            <button className="block text-center text-lg font-bold mt-12" onClick={onNext}>
                More about me
            </button>


        </div>
        </section>
    );
}
