import React from 'react'
import banner from '../../assets/banner.png'
import resume from '../../assets/MERN_Developer_Fateha_Jahan.pdf'
import { Link } from 'react-router-dom'
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {
  return (
    <div className='bg-[#F2F2F2]'>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className='md:flex justify-between items-center py-[130px] sm:py-[90px] md:py-[100px] md:text-left text-center'>
          <div className=''>
            <div className='flex flex-col gap-y-[15px]'>
              <h1 className='text-[24px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-bold underline'>Hello</h1>
              <p className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]'>I'm <Link to='/aboutme' className='text-[25px] md:text-[40px] underline '>Fateha Jahan</Link></p>
              <span className="text-[#6b46c1] font-bold text-[18px] sm:text-[24px] md:text-[28px]">
                <Typewriter
                  words={['MERN Developer', 'React Enthusiast', 'Frontend Developer', 'Web Developer']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <a href={resume} 
              download="Fateha_Jahan_Resume.pdf">
              <button
                type="submit"
                className="bg-[#6B46C1] mt-[40px] text-white hover:text-black font-bold py-[20px] px-[15px] text-center w-[200px] font-urbanist hover:bg-transparent transition duration-500 md:mx-0 mx-auto cursor-pointer"
              >
                Download my Resume
              </button>
            </a>
          </div>

          <div className='animate__animated animate__fadeInRight'>
            <img src={banner} alt="" className='md:block hidden max-w-[100%] md:max-w-[300px] lg:max-w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
