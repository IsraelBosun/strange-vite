import React from 'react'
import {Link} from "react-router-dom";

const BooksContainer = ({ image, category, title, price }) => {
  return (
    <div className='rounded-xl flex flex-col p-2 bg-gradient shadow-2xl bg-white rounded-md'>
    <img src={image} className='rounded-xl'  alt="courses" />
    <div className='mt-2 text-xs text-blue-600'>{category}</div>
    <div className='flex items-center justify-between mt-3'>
    <div className='text-sm   font-bold '>{title}</div>
    <div className='text-blue-600 font-bold'>{price}</div>
    </div>
    <div className='flex items-center mt-3 justify-center'>
    <Link to = "/books"  className='px-2 text-center cursor-pointer py-2 font-bold w-full text-white bg-blue-600 rounded-lg text-sm hover:text-blue-600 hover:bg-white border'>Order</Link>
    </div>
</div>
  )
}

export default BooksContainer