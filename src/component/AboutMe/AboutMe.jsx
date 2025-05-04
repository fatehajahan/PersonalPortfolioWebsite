import React, { useEffect, useState } from 'react'
import aboutme from '../../assets/aboutme.png'
import AOS from "aos"
import "aos/dist/aos.css"

const AboutMe = () => {
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    AOS.init({ once: false })

    let lastScrollTop = window.scrollY

    const handleScroll = () => {
      const st = window.scrollY
      if (st > lastScrollTop) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      lastScrollTop = st <= 0 ? 0 : st

      AOS.refresh()
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className='md:py-[60px] py-[70px] lg:py-[150px]'
      data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
      data-aos-duration="1500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>

          {/* Image */}
          <div className='hidden lg:flex md:w-1/2 w-full justify-center'>
            <img
              src={aboutme}
              alt="About Me"
              className='hidden sm:block max-w-full md:max-w-[350px] lg:max-w-[450px] h-auto object-cover'
            />
          </div>

          {/* Text Content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className='font-revolution text-[28px] sm:text-[36px] md:text-[45px] mb-4'>About Me</h1>

            <p className='text-[18px] sm:text-[20px] md:text-[22px] leading-[32px] sm:leading-[38px] md:leading-[45px] font-urbanist text-justify px-4 sm:px-6 md:px-0'>
              I’m a passionate frontend developer with a strong eye for design and a deep understanding of modern web technologies.
              I specialize in React.js, leveraging Tailwind CSS and Google Fonts to create sleek, responsive, and user-friendly interfaces.
              I love transforming ideas into interactive, pixel-perfect web experiences. Whether it's refining UI/UX, optimizing code for efficiency,
              or ensuring a seamless user journey, I thrive on crafting high-quality digital solutions.

              <span
                className='font-bold block mt-6'
                data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
                data-aos-duration="1500"
              >
                <span className='block font-semibold text-[22px] sm:text-[28px] md:text-[35px] mb-4'>🔹 Key Skills:</span>
                <span className='block'>✔ React.js</span>
                <span className='block'>✔ Tailwind CSS & Component Reusability</span>
                <span className='block'>✔ Firebase (Auth, Realtime Database)</span>
                <span className='block'>✔ Responsive & Accessible Design</span>
                <span className='block mb-4'>✔ State Management (Redux)</span>

                <span className='text-[18px] sm:text-[20px] md:text-[23px] font-open'>Let’s build something amazing together! 🚀</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
