import React from 'react'

const BlogContainer = ({ image, title, text, button }) => {
  return (
    <div className='flex flex-col gap-4 items-center '> 
      <div className = "bg-blue-600 p-2 rounded-lg">
        <img src = {image} className='rounded-lg' alt ="blogging" />
      </div >
      <div className=''>
      <p className='text-lg font-bold '>{title}</p>
      <p className=' py-2 text-sm'>{text}</p>
      <button className = " px-4 py-2 w-full font-bold text-white bg-blue-600 rounded-lg mr-4 text-sm hover:text-blue-600 hover:bg-white border">Read More...</button>
      </div>
    </div>
  )
}

export default BlogContainer