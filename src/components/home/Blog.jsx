import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion"
import BlogContainer from "../container/BlogContainer.jsx"
import { blogging } from "../../components/container/Data.jsx"
import marcus from "../../assets/marcus.png";
import { exploreWorlds } from '../../components/container/Data.jsx';
import { TypingText } from '../container/TypingTexts';
import { fadeIn, staggerContainer } from '../container/Data'


import "./styles.css"

const Blog = () => {
    const [active, setActive] = useState("world-2")
    return (
        <motion.article     variants={staggerContainer}
        initial = "hidden"
        whileInView= "show"
        viewport={{once: false, amount: 0.25}} className='section'>
            <div className='text-center'>
                <p className='text-xl font-bold capitalize'>Or read my  <span className='text-blue-600'>blogs</span> </p>
                {/* <p className='text-[#5F6D7E]'>Here are some </p> */}
                <TypingText title = "Here are some" textStyles = "t font-bold mb-4"  />
            </div>
            <div className='overflow-x-hidden'>
            <div className="mt-[50px] flex md:flex-row flex-col min-h-[70vh] gap-5">
                {
                    exploreWorlds.map((bloggers, index) => {
                        return (
                            <BlogContainer key={bloggers.id} index={index} active={active} handleClick={setActive} {...bloggers} />
                        )
                    })
                }
            </div>
            </div>
        </motion.article >
    )
}

export default Blog