"use client"
import React from 'react'
import { Link } from "react-router-dom"
const NavLink = ({ href, link}) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
        <Link className='font-bold transition-all duration-300' to={href}>{link}</Link>
    </li>
  )
}

export default NavLink