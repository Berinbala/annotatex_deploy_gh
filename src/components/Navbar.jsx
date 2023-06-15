import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="sticky bg-black top-0 z-50">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white shadow-xl'>
        <h1 className='w-full text-3xl font-bold text-[#fbbf24]'>AnnotateX</h1>
        <ul className='hidden md:flex'>
          <li className='p-4  hover:text-[#fbbf24]'><a href="">Home</a></li>
          <li className='p-4  hover:text-[#fbbf24]'><a href="#recent-projects">Projects</a></li>
          {/* <li className='p-4 relative group  hover:text-[#fbbf24]'>
            <a href="#annotation">Services</a>
            <ul className='absolute hidden group-hover:block w-56'>
              <li className='p-2 bg-black'>
                <a href="">DevOps</a>
              </li>
              <li className='p-2 bg-black'>
                <a href="">Mobile Apps</a>
              </li>
              <li className='p-2 bg-black'>
                <a href="">Back-End</a>
              </li>
              <li className='p-2 bg-black'>
                <a href="">Front-End</a>
              </li>
              <li className='p-2 bg-black'>
                <a href="">Cloud Computing</a>
              </li>
            </ul>
          </li> 
          <li className='p-4  hover:text-[#fbbf24]'><a href="">About</a></li>*/}
          <li className='p-4  hover:text-[#fbbf24]'><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#fbbf24] m-4'>AnnotateX</h1>
          <li className='p-4 border-b border-gray-600'><a href="">Home</a></li>
          <li className='p-4 border-b border-gray-600'><a href="#recent-projects">Projects</a></li>
          {/* <li className='p-4 border-b border-gray-600'><a href="">Services</a></li> 
          <li className='p-4 border-b border-gray-600'><a href="">About</a></li>*/}
          <li className='p-4 border-b border-gray-600'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;