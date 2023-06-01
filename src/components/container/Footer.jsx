import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs"
import { Link } from "react-router-dom"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"


const Footer = () => {
    return (
        <section className='bg-[#151B28]'>
        <div className=' section sm:text-md text-sm w-full p-5   grid justify-between items- grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-9 '>
            <div className='flex flex-col gap-3'>
                <div>
                    <img src={""} alt="Logo" />
                </div>
                <p className='text-[#A5ACBA]'>Dr. Oluwole: committed to improving health outcomes through compassion and innovation.</p>
            </div>
            <div className = "grid grid-cols-2 gap-9">
            <div className='flex flex-col gap-3 text-[#A5ACBA]'>
                <p className='font-bold text-lg text-[#F9F9F9]'>
                    Resources
                </p>
                <div className='list-none flex flex-col gap-3 '>
                    <li>About</li>
                    <li>Services </li>
                    <li>Work with me</li>
                    <li><Link to = "/privacy"> Privacy Policy</Link> </li>
                    <li><Link to = "/contact"> Contact</Link> </li>
                </div>
            </div>

            <div className='flex flex-col gap-3 text-[#A5ACBA]' >
                <p className='font-bold text-lg text-[#F9F9F9]'>
                    Products
                </p>
                <div className='list-none flex flex-col gap-3 '>
                    <li><Link to = "/books"> Books</Link></li>
                    <li>Blog</li>
                    <li>Profityn</li>
                    <li>Consultation</li>
                    <li>Play time</li>
                </div>
            </div>
            </div>

            <div className='flex flex-col items-start justify-left gap-3 text-[#A5ACBA]' >
                <p className='font-bold text-lg text-[#F9F9F9]'>
                    Follow Me
                </p>
                <div className='flex flex-col  gap-5 '>
                    <p>
                        Follow me on my social media handles 
                    </p>
                    <div className='flex gap-4 items-start justify-between'>
                        <div className='w-[10%]'><img src={facebook} alt="facebook" className='' /></div>
                        <div className='w-[10%]'><img src={linkedin} alt="linkedin" className='' /></div>
                        <div className='w-[10%]'><img src={twitter} alt="twitter" className='' /></div>
                        <div className='w-[10%]'><img src={youtube} alt="youtube" className='' /></div>
                        <div className='w-[10%]'><img src={instagram} alt="instagram" className='' /></div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full h-1 bg-white'></div> */}
           
        </div>
         <div className='flex section gap-4 items-center justify-center border-t-2 border-white'>

                <p className='text-center text-white'>
                    &copy; 2023. Dr Oluwole Marcus
                </p>
            </div>
        </section>
    )
}

export default Footer;