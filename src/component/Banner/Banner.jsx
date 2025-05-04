import React from 'react'
import banner from '../../assets/banner.png'
// import resume from '../../assets/myResume.pdf'
import resume from '../../assets/fatehaResume.pdf'
import { Link } from 'react-router-dom'
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {
  return (
    <div className='bg-[#F2F2F2]'>
      <div className="container">
        <div className='md:flex justify-between items-center md:py-[100px] py-[130px] md:text-left text-center'>
          <div className=''>
            <div className='flex flex-col gap-y-[15px]'>
              <h1 className='md:text-[50px] text-[20px] font-bold underline'>Hello</h1>
              <p className='md:text-[80px] text-[40px]'>I'm <Link to='/aboutme' className='md:text-[59px] text-[35px] font-urbanist pl-[17px] underline '>Fateha Jahan</Link></p>
              <span className="text-[#6b46c1] font-bold md:text-[29px] text-[19px]">
                <Typewriter
                  words={['Frontend Developer', 'React Enthusiast']}
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
            <img src={banner} alt="" className='md:block hidden' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner