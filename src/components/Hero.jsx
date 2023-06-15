import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("contact");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        {/* <p className='text-[#fbbf24] font-bold p-2'>
          GROWING WITH INTELLIGENCE
        </p> */}
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Harness the Potential of AI!
        </h1>
        <div className='my-12 flex flex-col justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Annotation solutions tailored 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['for you']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Delegate your tedious tasks to us so you can focus more time on your core research tasks.</p>
        <button onClick={scrollToSection} className='bg-[#fbbf24] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact Us</button>
      </div>
    </div>
  );
  
};

export default Hero;