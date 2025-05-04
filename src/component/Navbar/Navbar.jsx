import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const drop = () => {
        setDropdown(!dropdown);
    }
    return (
        <>
            <div className='bg-[#A78BFA] fixed top-0 left-0 w-full z-50 shadow-md'>
                <div className='py-[16px] '>
                    <div className='container '>
                        <div className="md:flex md:justify-between items-center">
                            <div className="logo flex justify-between items-center">
                                <Link to="/" className='text-[30px] font-revolution font-bold '>Fateha</Link>
                                <IoIosMenu onClick={drop} className='text-black text-[30px] md:hidden block cursor-pointer' />
                            </div>
                            <div className="nav-items">
                                <div className={`${dropdown ? "mt-5" : "md:flex hidden gap-x-[47px] text-white items-center"}`}>
                                    <div className='flex gap-x-[30px] flex-col md:flex-row gap-y-[20px]'>
                                        <Link to="/" ><p className='hover:bg-[#5E3B96] py-[5px] px-[10px] hover:text-white rounded-xl transition duration-500 font-semibold text-black font-urbanist' onClick={()=>setDropdown(false)}>Home</p></Link>

                                        <Link to="/aboutme"><p className='hover:bg-[#5E3B96] py-[5px] px-[10px] hover:text-white rounded-xl transition duration-500 font-semibold text-black font-urbanist' onClick={()=>setDropdown(false)}>About Me</p></Link>

                                        <Link to="/projects"><p className='hover:bg-[#5E3B96] py-[5px] px-[10px] hover:text-white rounded-xl transition duration-500 font-semibold text-black font-urbanist' onClick={()=>setDropdown(false)}>Projects</p></Link>

                                        <Link to="/contactme"><p className='hover:bg-[#5E3B96] py-[5px] px-[10px] hover:text-white rounded-xl transition duration-500 font-semibold text-black font-urbanist' onClick={()=>setDropdown(false)}>Conatct</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar