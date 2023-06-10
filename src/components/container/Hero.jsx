import React from 'react'
import Image from "../../assets/marcus.png"

const Hero = () => {
  return (
    // <div className='bg-blue-600'>
    //     <div className='section'>
    //         <div className='relative flex flex-col items-center justify-center mx-auto  w- h-[200px] '>
    //             <p className='font-bold text-white  text- text-3xl '>Dr Marcus Oluwole</p>
    //             <div className='relative top-[80px] rounded-xl bg-white px-3'>
    //             <p className=' font-semibold text- text-xl'>M.B.{" "}B.S ADO EKITI</p>
    //         </div>
    //         </div>
    //     </div>
    // </div>
    <section className='   section '>
    <div className='flex flex-col md:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 '>
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
              <span className='leading-relaxed text-blue-700'>Welcome</span> To My Website
            </h1>
            <p className='hidden md:flex max-w-[480px] mb-8'>
            Your Health,My Passion. Driven by Compassion and Innovation, I deliver personalized care that embraces your unique story. Together, let's rewrite the narrative of your well-being and success.</p>
        </div>
        <div className='hidden flex-1 md:flex justify-center items-center'>
        <img src={Image} alt="" className='' />
    </div>
    </div> 
  </section>
  )
}

export default Hero