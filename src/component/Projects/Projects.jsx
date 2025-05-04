import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import figma from '../../assets/figma1.png';
import figma1 from '../../assets/figma2.png';
import figma2 from '../../assets/figma3.png';
import frontend1 from '../../assets/frontend1.png';
import frontend2 from '../../assets/frontend2.png';
import frontend3 from '../../assets/perfume.png';

const Projects = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    AOS.init({ once: false });

    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const st = window.scrollY;
      if (st > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = st <= 0 ? 0 : st;

      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="py-[100px]"
      data-aos={scrollDirection === 'down' ? 'fade-down' : 'fade-up'}
      data-aos-duration="1500"
    >
      <div className="container">
        {/* Heading */}
        <div className="relative mb-[50px]">
          <h1 className="lg:text-[150px] md:text-[100px] text-[50px] font-train opacity-[10%] text-center select-none">
            PORTFOLIO
          </h1>
          <p className="lg:text-[100px] md:text-[65px] sm:text-[40px] text-[30px] absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center select-none">
            My Projects:
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Items */}
          {[ 
            { img: figma, label: 'Design', link: 'https://fatehajahan.github.io/finsweet/' },
            { img: figma1, label: 'Design', link: 'https://fatehajahan.github.io/html-css-project_03/' },
            { img: figma2, label: 'Design', link: 'https://fatehajahan.github.io/html-css-project_01/' },
            { img: frontend1, label: 'Front-End', link: 'https://insta-app-omega.vercel.app/' },
            { img: frontend2, label: 'Front-End', link: 'https://petrol-nine.vercel.app/' },
            { img: frontend3, label: 'Perfume Ecommerce', link: 'https://perfume-beryl.vercel.app/' }
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[337px] relative cursor-pointer mx-auto w-[90%]"
            >
              <img
                src={project.img}
                alt={project.label}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="bg-[#0000008d] opacity-0 hover:opacity-100 transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl flex items-start">
                <p className="text-white font-revolution text-[30px] px-[20px] py-[25px] underline">
                  {project.label}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
