import React from 'react'
import { books } from "../container/Data"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import BooksContainer from '../container/BooksContainer.jsx'

const Books = () => {
    return (
        <div className='section'>
            <div className='text-xl font-bold mt-'>Still have questions? </div>
            <p>check out my <Link to = "/books" className='text-blue-600 font-bold'>books here</Link></p>
            <div className='mt-12 overflow-x-hidden w-full relative'>
                <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[350%] animate-slide'>
                    {books.slice(0, 4).map(course => {
                        return <BooksContainer key={course.id} {...course} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Books