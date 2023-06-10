import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs"
import { Link } from "react-router-dom"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/marlogo.png"


const Footer = () => {
    return (
        <section className='bg-[#151B28]'>
        <div className=' section sm:text-md text-sm w-full p-5   grid justify-between items- grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-9 '>
            <div className='flex flex-col gap-3'>
                <Link to = "/" className='w-1/2 max-w-[200px]'>
                    <img src={logo} alt="Logo" />
                </Link>
                <p className='text-white'>Your Health, My Passion. Driven by Compassion and Innovation, I deliver personalized care that embraces your unique story. Together, let's rewrite the narrative of your well-being and success.</p>
            </div>
            <div className = "grid grid-cols-2 gap-9">
            <div className='flex flex-col gap-3 text-[#A5ACBA]'>
                <p className='font-bold text-lg text-[#F9F9F9]'>
                    Resources
                </p>
                <div className='list-none flex flex-col gap-3 '>
                    {/* <li>About</li>
                    <li>Services </li>
                    <li>Work with me</li> */}
                    <li><Link to = "/privacy"> Privacy Policy</Link> </li>
                    <li><Link to = "/contact">  Contact </Link> </li>
                </div>
            </div>

            <div className='flex flex-col gap-3 text-[#A5ACBA]' >
                <p className='font-bold text-lg text-[#F9F9F9]'>
                    Products
                </p>
                <div className='list-none flex flex-col gap-3 '>
                    <li><Link to = "/books"> Books</Link></li>
                    <li>Blog</li>
                    {/* <li>Profityn</li> */}
                    {/* <li><Link to = "/contact"> Consultation</Link> </li> */}
                    {/* <li>Play time</li> */}
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
                        <a href="https://www.facebook.com/oluwole.marcus" target="_blank" rel="noopener noreferrer" className='w-[10%]'><img src={facebook} alt="facebook" className='' /></a >
                        <a href="https://www.linkedin.com/in/drmarcusoluwole" target="_blank" rel="noopener noreferrer" className='w-[10%]'><img src={linkedin} alt="linkedin" className='' /></a>
                        <a href="https://www.twitter.com/Drmarcusoluwole" target="_blank" rel="noopener noreferrer" className='w-[10%]'><img src={twitter} alt="twitter" className='' /></a>
                        {/* <div className='w-[10%]'><img src={youtube} alt="youtube" className='' /></div> */}
                        <a href="https://www.instagram.com/marcusoluwole01" target="_blank" rel="noopener noreferrer" className='w-[10%]'><img src={instagram} alt="instagram" className='' /></a>
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