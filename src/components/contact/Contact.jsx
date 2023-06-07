import React from 'react';
import Header from "../container/Header"
import About from "../../assets/contact.jpg";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';


// toast.success("Payment successful!");

const Contact = () => {
  // meqwbkkb me
  
  const [state, handleSubmit] = useForm("moqzowkz");
  if (state.succeeded) {
      return <Contact />;
  }
  return (
    <div id = "contact" className=' text-blue-600'>
      <Header title="Contact" image={About}>
       Do you want to personally speak or meet with me?
      </Header>
<div className='bg-white'>
      <section className='section gap-9 grid md:grid-cols-2 sm:grid-cols-1'>
        <div className='p-4 flex flex-col gap-9 mx-auto'>
          <h1 className='text-3xl uppercase text-center font-bold'>Let's Talk</h1>
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
            <a href="https://www.twitter.com/Drmarcusoluwole" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex items-center gap-3 py-4  font-bold'>
             <BsTwitter className=' text-3xl' />
              <p>I tweet about important things</p>
              
            </a>
          </div>
        </div>

        <div className='mt-5 bg-white shadow-2xl text-blue-600 opacity- p-8 rounded-3xl' >
          <form className="max-w-md mx-auto"  onSubmit={handleSubmit}>
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input type="text" required id="name" name="name" className="rounded-lg w-full px-4 py-2 mb-4 border rounded border-Teal outline-blue-600" />
            <label htmlFor="email" required className="block mb-2 font-semibold">Email</label>
            <div className="relative flex">
              <input type="email" required id="email" name="email" className="rounded-lg w-full px-4 py-2 mb-4 border rounded border-Teal outline-blue-600" />
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            </div>
            <label htmlFor="message"  className="block mb-2 font-semibold">Message</label>
            <textarea id="message" required name="message" rows="4" className="rounded-lg w-full px-4 py-2 mb-4 border rounded border-Teal outline-blue-600" placeholder='Write to me' />
            <button  type="submit" disabled={state.submitting} className=" bg-blue-600 text-white  px-4 py-2 rounded-xl hover:bg-blue-700">Submit</button>
          </form>

        </div>
      </section>
      </div>
    </div>
  )
}

export default Contact;