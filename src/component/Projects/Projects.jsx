import React, { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import figma from '../../assets/figma1.png'
import figma1 from '../../assets/figma2.png'
import figma2 from '../../assets/figma3.png'
import frontend1 from '../../assets/frontend1.png'
import frontend2 from '../../assets/frontend2.png'
import frontend3 from '../../assets/perfume.png'

const Projects = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        AOS.init({ once: false });

        let lastScrollTop = window.scrollY;

        const handleScroll = () => {
            const st = window.scrollY;
            if (st > lastScrollTop) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollTop = st <= 0 ? 0 : st;

            AOS.refresh(); // Refresh AOS to apply the new animation trigger
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='py-[100px]' data-aos={scrollDirection === "down" ? "fade-down" : "fade-up"} data-aos-duration = "1500">
            <div className="container">
                <div className='relative'>
                    <h1 className='md:text-[150px] text-[50px] font-train opacity-[10%] text-center select-none'>PORTFOLIO</h1>
                    <p className='md:text-[100px] text-[30px] absolute top-[40%] left-[28%] select-none'>My Projects:</p>
                </div>

                <div>
                    <div className="projects pt-[60px]">
                        <div className='md:flex justify-between gap-x-[30px]'>
                            <a href='https://fatehajahan.github.io/finsweet/' target='_blank' className='md:w-[400px] w-[300px] md:mx-0 mx-auto h-[337px] relative cursor-pointer'>
                                <img src={figma} alt="" className='w-full h-full object-cover rounded-2xl cursor-pointer' />
                                <div className='bg-[#0000008d] opacity-0 hover:opacity-[100%] transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl'><p className='text-white font-revolution text-[30px] px-[20px] py-[25px] underline'>Design</p></div>
                            </a>

                            <a href='https://fatehajahan.github.io/html-css-project_03/' target='_blank' className='md:w-[400px] w-[300px] md:mx-0 mx-auto h-[337px] relative cursor-pointer md:mt-0 mt-[30px]'>
                                <img src={figma1} alt="" className='w-full h-full object-cover rounded-2xl cursor-pointer' />
                                <div className='bg-[#0000008d] opacity-0 hover:opacity-[100%] transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl'><p className='text-white font-revolution text-[30px] px-[20px] py-[25px] underline'>Design</p></div>
                            </a>

                            <a href='https://fatehajahan.github.io/html-css-project_01/' target='_blank' className='md:w-[400px] w-[300px] md:mx-0 mx-auto h-[337px] relative cursor-pointer md:mt-0 mt-[30px]'>
                                <img src={figma2} alt="" className='w-full h-full object-cover  rounded-2xl cursor-pointer' />
                                <div className='bg-[#0000008d] opacity-0 hover:opacity-[100%] transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl'><p className='text-white font-revolution text-[30px] px-[20px] py-[25px] underline'>Design</p></div>
                            </a>

                        </div>



                        <div className='md:flex  justify-between gap-x-[30px] md:pt-[80px] '>
                            <a href='https://insta-app-omega.vercel.app/' target='_blank' className='md:w-[400px] w-[300px] md:mx-0 mx-auto h-[337px] relative cursor-pointer'>
                                <img src={frontend1} alt="" className='w-full h-full object-cover rounded-2xl cursor-pointer' />
                                <div className='bg-[#0000008d] opacity-0 hover:opacity-[100%] transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl'><p className='text-white font-revolution text-[30px] px-[20px] py-[25px] underline'>Front-End</p></div>
                            </a>

                            <a href='https://petrol-nine.vercel.app/' target='_blank' className='md:w-[400px] w-[300px] md:mx-0 mx-auto h-[337px] relative cursor-pointer md:mt-0 mt-[30px]'>
                                <img src={frontend2} alt="" className='w-full h-full object-cover rounded-2xl cursor-pointer' />
                                <div className='bg-[#0000008d] opacity-0 hover:opacity-[100%] transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl'><p className='text-white font-revolution text-[30px] px-[20px] py-[25px] underline'>Front-End</p></div>
                            </a>

                            <a href='https://perfume-beryl.vercel.app/' target='_blank' className='md:w-[400px] w-[300px] md:mx-0 mx-auto h-[337px] relative cursor-pointer md:mt-0 mt-[30px]'>
                                <img src={frontend3} alt="" className='w-full h-full object-cover  rounded-2xl cursor-pointer' />
                                <div className='bg-[#0000008d] opacity-0 hover:opacity-[100%] transition duration-500 absolute top-0 left-0 w-full h-full rounded-2xl'><p className='text-white font-revolution text-[30px] px-[20px] py-[25px] underline'>Perfume Ecommerce</p></div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects