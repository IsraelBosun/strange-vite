import React from 'react'
import BlogContainer from "../container/BlogContainer.jsx"
import { blogging } from "../../components/container/Data.jsx"
import marcus from "../../assets/marcus.png"
import "./styles.css"

const Blog = () => {
    return (
        <article className='section'>
            <div className='text-center'>
                <p className='text-xl font-bold'>Or read my  <span className='text-blue-600'>blog posts here</span> </p>
                <p className='text-[#5F6D7E]'>These are some </p>
            </div>
            <div className='overflow-x-hidden'>
            <div className='flex animate-slide-right md:w-full sm:w-[170%] xs:w-[340%] w-[250%] mt-6  gap-9'>
                {
                    blogging.map((bloggers) => {
                        return (
                            <BlogContainer key={bloggers.id} {...bloggers} />
                        )
                    })
                }
            </div>
            </div>
        </article>
    )
}

export default Blog