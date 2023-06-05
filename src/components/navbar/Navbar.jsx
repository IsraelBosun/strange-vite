import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import NavLink from './NavLink.jsx'
import MobileNavLink from './MobileNavLink.jsx'
import { navLinks } from "../container/Data.jsx"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { HiMenuAlt1, HiX } from "react-icons/hi";
import styles from "../container/Data.jsx"
import { navVariants } from '../container/Data.jsx'
import logo from "../../assets/marlogo.png"



const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null)

    useEffect(() => {
        const ScrollActive = () => {
            setActive(window.scrollY > 20)
        };
        window.addEventListener("scroll", ScrollActive);
        return () => window.removeEventListener("scroll", ScrollActive)
    }, [active])

    return (
        <motion.nav
        variants={navVariants}
        initial = "hidden"
        whileInView= "show"
            className={`${active ? "shadow-lg bg-white" : ""} sticky w-full top-0 left-0 z-20`}
        >
            <div>
                <div
                    className={`${active ? "py-2 transition-all duration-300" : "py-4"} container mx-auto flex items-center justify-between px-2`}
                >
                    <Link to="/" className = "w-1/3 max-w-[250px]">
                        {/* <div className='text-xl text-Blue uppercase tracking-wide '>DR Marcus</div> */}
                        <img src={logo} alt="" className='' />
                    </Link>
                    <div className='flex items-center'>
                    <div className='sm:flex items-center hidden'>
                        {navLinks.map((navLink) => {
                            return <NavLink key={navLink.id} {...navLink} />
                        })}
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='relative py-3 px-6 font-thin text-3xl'>
                            <AiOutlineShoppingCart
                                onClick={() => setShowCart(true)}
                            />
                            <div className="absolute top-0 right-4 w-4  h-4 rounded-full  text-xs bg-red-700 text-white ">0</div>
                        </button>
                        <HiMenuAlt1
                            className='text-3xl sm:hidden text-thin cursor-pointer'
                            onClick={() => setToggle(true)}
                        />
                    </div>
                    </div>
                    {
                        toggle && (
                            <div className="fixed h-full w-5/6 top-0 left-0 z-20 bg-white text-blue-800 flex flex-col justify-center   items-center shadow-xl gap-8 py-8" >
                                {navLinks.map((navLink) => {
                                    return (<MobileNavLink key={navLink.id} {...navLink} setToggle={setToggle} />)
                                })}
                                <HiX
                                    className="absolute right-12 top-12 text-3xl cursor-pointer"
                                    onClick={(prev) => setToggle(!prev)}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar