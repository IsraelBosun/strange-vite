import React from 'react'
import {bloggers} from "./Data"
import { Link } from "react-router-dom"
import marcus from "../../assets/marcus.png"

const BlogList = ({blogs}) => {

  console.log("blogspage")
  console.log(blogs)
    
    return (
        
        
        
    //     <div className='flex flex-col group cursor-pointer'>
    //     {books.map(book => (
    //         <div key={book.id}>
    //             <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
    //             <img src={book.image} alt="" className = " object-cover object-left lg:object-center" />
    //             <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
    //                 <p className='font-bold'>{book.category}</p>
    //                 <p>{book.price}</p>
    //             </div>
    //             <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
    //             <div className='bg-[#F7AB0A] text-center tec-black px-3 py-1 rounded-full text-sm font-semibold '>
    //                 <p className='z-10'>Youtube</p>
    //             </div>
    //         </div>
    //             </div>
    //         </div>
    //     ))}
    //     <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
    //         <img src={marcus} alt="" className = " object-cover object-left lg:object-center" />
    //         <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
    //             <p className='font-bold'>My Blog</p>
    //             {/* <p>
    //                 {new Date{post._createdAt}.toLocalDateString
    //                 {"en-US", {
    //                     day: "numeric",
    //                     month:"long",
    //                     year: "numeric"
    //                 }}}
    //             </p> */}
    //         </div>

    //         <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
    //             <div className='bg-[#F7AB0A] text-center tec-black px-3 py-1 rounded-full text-sm font-semibold '>
    //                 <p>Youtube</p>
    //             </div>
    //         </div>
    //     </div>

    //     <div className='mt-5 flex-1'>
    //         <p className='underline text-lg font-bold'>My title</p>
    //         <p className='text-gray-500'>My description</p>
    //     </div>

    // </div>
    <div>
                      <Link className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {blogs.data.map((post) => (
                  <Link  to= {`/blog/${post.id}`}
                    key={post.id}
                    className=" mt-6 group-hover:scale-105 transition-transform duration-200 ease-out  "
                  >
                        <img  src={`http://localhost:1337${post.attributes.Banner.data.attributes.url}`} className='rounded-md' alt="courses" />
                        <div className='mt-2 text-sm font-semibold text-blue-600 uppercase'>{post.attributes.category}</div>
                        <div className='flex flex-col gap-1 justify-between mt-2'>
                            <div className='text- capitalize font-semibold '>{post.attributes.title}</div>
                            <div className='text-blue-600 text-sm'>{post.attributes.date}</div>
                        </div>
                        {/* <div className='flex items-center mt-3 justify-center'>
                          <div to = {`/books/${post.id}`} className='px-2 py-2 font-bold w-full text-white bg-blue-600 rounded-lg text-sm hover:text-blue-600 hover:bg-white border text-center'>Order</div>  
                        </div> */}

                   
                  </Link >
                ))}
              </Link>
    </div>
  )
}

export default BlogList