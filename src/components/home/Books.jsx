import React from 'react'
import { books } from "../container/Data"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import BooksContainer from '../container/BooksContainer.jsx'
import { TypingText } from '../container/TypingTexts';
import { fadeIn, staggerContainer } from '../container/Data'

const Books = () => {
    return (
        <motion.section     variants={staggerContainer}
        initial = "hidden"
        whileInView= "show"
        viewport={{once: false, amount: 0.25}}
     className='section'>
            <div className='text-center'>
                <p className='text-xl font-bold'>Still Have <span className='text-blue-600'>Questions?</span> </p>
            <TypingText title = "Check out my books" textStyles = "font-semibold" />
            </div>

            <div className='mt-12 overflow-x-hidden w-full relative'>
                <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[350%] animate-slide'>
                    {books.slice(0, 4).map(course => {
                        return <BooksContainer key={course.id} {...course} />
                    })}
                </div>
            </div>
        </motion.section>
    )
}

export default Books