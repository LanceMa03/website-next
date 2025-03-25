'use client';

import { faMagnifyingGlass, faUtensils, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const projects = [
  {
    title: "BoilerFind",
    iconName: faMagnifyingGlass,
    description: "BoilerFind is a full-stack web app designed for the Purdue community to help speed up the recovery process of lost and found items on campus.",
    tags: ["Java", "SpringBoot", "MongoDB", "React", "JavaScript"],
  },
  {
    title: "LetMeCook",
    iconName: faUtensils,
    description: "LetMeCook is a versatile meal planning app that helps users create personalized meal plans, generate grocery lists, track nutrition and pantry inventory, and earn badges by completing challenges.",
    tags: ["React", "SpringBoot", "MongoDB", "Spoonacular", "OpenAI"],
  },
  {
    title: "Personal Website",
    iconName: faLaptopCode,
    description: "This portfolio website built with NextJS, TypeScript and Tailwind CSS.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJS", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projectsSection" className="bg-[#222] text-white py-20 px-6 w-full h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-bold tracking-wider mb-12" style={{letterSpacing: '0.4rem'}}>PROJECTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg hover:-translate-y-1 transition">

              <div className="text-4xl mb-4 text-center">
                <FontAwesomeIcon icon={project.iconName} />
              </div>

              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-base mb-4" style={{color: '#b3b3b3'}}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 px-2 py-1 rounded text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
