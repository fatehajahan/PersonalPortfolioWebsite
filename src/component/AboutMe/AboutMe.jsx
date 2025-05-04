import React, { useEffect, useState } from 'react'
import aboutme from '../../assets/aboutme.png'
import AOS from "aos"
import "aos/dist/aos.css"

const AboutMe = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    // const [skills, setSkills] = useState(null)

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
        <div className='md:py-[150px] py-[70px]' data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} data-aos-duration="1500">
            <div className="container">
                <div className='md:flex justify-between items-center'>
                    <div className='md:w-1/2'>
                        <img src={aboutme} alt="" className='md:block hidden h-[700px] object-cover' />
                    </div>
                    <div className='md:w-1/2 md:text-left text-center'>
                        <h1 className='font-revolution text-[45px]'>About Me</h1>
                        <p className='text-[22px] md:text-left text-justify md:px-0 px-[20px] leading-[45px] font-urbanist'>I’m a passionate frontend developer with a strong eye for design and a deep understanding of modern web technologies. I specialize in React.js, leveraging Tailwind CSS and Google Fonts to create sleek, responsive, and user-friendly interfaces.
                            I love transforming ideas into interactive, pixel-perfect web experiences. Whether it's refining UI/UX, optimizing code for efficiency, or ensuring a seamless user journey, I thrive on crafting high-quality digital solutions.

                            <span className='font-bold' data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} data-aos-duration="1500">
                                <span className='block pt-[20px] pb-[20px] font-semibold text-[35px]'>🔹 Key Skills:</span>
                                <span className='block' >✔ React.js.</span>
                                <span className='block' >✔ Tailwind CSS & Component Reusability</span>
                                <span className='block' >✔ Firebase (Auth, Realtime Database)</span>
                                <span className='block' >✔ Responsive & Accessible Design</span>
                                <span className='block pb-[30px] '>✔ State Management (Redux)</span>

                                <span className=' text-[23px] font-open'>Let’s build something amazing together! 🚀</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe