import React from 'react';
import Header from "../container/Header"
import About from "../../assets/contact.jpg";
import {GoLocation} from "react-icons/go"
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"


const Contact = () => {
  return (
    <div className=' text-blue-600'>
      <Header title="Contact Me" image={About}>
       Do you want to personally speak or meet with Dr Marcus? here you are.
      </Header>
<div className='bg-white'>
      <section className='section gap-9 grid md:grid-cols-2 sm:grid-cols-1'>
        <div className='p-4 flex flex-col gap-9 mx-auto'>
          <h1 className='text-3xl uppercase text-center font-bold'>For consultation</h1>
          <div className='flex  flex-col gap-2'>
            <p>Connect with me on my socials</p>
            <p>For private consultation</p>
            <p>Simply fill out the form below and I will be in touch</p>
          </div>
          <div className='flex flex-col  gap-2'>
            <a className='flex gap-3 items-center' target='_blank' href="https://wa.me/+2348137885695">
              <div className='flex items-center gap-3 py-4  font-bold'>
                <AiOutlineWhatsApp className=' text-3xl' />
              </div>
              +234 813 788 5695
            </a>
            <div className='flex items-center pl-2  gap-3 bg-blue-700 py-4  rounded-lg text-white fit-content '>
              <a target='_blank' href="mailto:meetdoctorgreen@gmail.com" className='flex justify-center  gap-3'>
                <AiOutlineMail className='text-white  text-3xl' />
                meetdoctorgreen@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-3 py-4  font-bold'>
              <GoLocation className=' text-3xl' />
              100% Online
            </div>
          </div>
          <div className='flex   items-center gap-4 text-Teal '>
            <div className = "w-[10%]">
              <img src={facebook} alt="facebook" className ="" />
            </div>
            <div className = "w-[10%]">
              <img src={twitter} alt="twitter" className ="w-full" />
            </div>
            <div className = "w-[10%]">
              <img src={linkedin} alt="linkedin" className ="w-full" />
            </div>
            <div className = "w-[10%]">
              <img src={youtube} alt="linkedin" className ="w-full" />
            </div>
          </div>
        </div>

        <div className='mt-5 bg-white shadow-2xl text-blue-600 opacity- p-8 rounded-3xl' >
          <form className="max-w-md mx-auto">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 mb-4 border rounded border-Teal outline-blue-600" />
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <div className="relative flex">
              <input type="email" id="email" name="email" className="w-full px-4 py-2 mb-4 border rounded border-Teal outline-blue-600" />
              {/* <AiOutlineMail className="absolute left-2  top-1 text-3xl  text-Teal" /> */}
            </div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 mb-4 border rounded border-Teal outline-blue-600" placeholder='Write to me' />
            <button onClick={""} type="submit" className=" bg-blue-600 text-white  px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </form>

        </div>
      </section>
      </div>
    </div>
  )
}

export default Contact;