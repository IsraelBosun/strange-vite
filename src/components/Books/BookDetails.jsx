import React, { useContext, useState } from 'react'
import { books } from "../container/Data"
import { useParams } from "react-router-dom"

// import { addToCart } from "../src/components/container/Counter"

// import {Context} from "../src/components/container/StateContext"
// import { useDispatch, useSelector } from "react-redux"

const BookDetails = () => {
//   const qty = 1
  const [clicked, setClicked] = useState(false)
//   const { onAdd, setShowCart } = useContext(Context);

    const { id } = useParams();
    console.log(id)

    
  
    const coursesT = books.find((course) => {
        return course.id === parseInt(id)
    })
    
    
    
    const { title, image, category, Level, details, price } = coursesT
    console.log(coursesT)

    const handleBuyNow = () => {
      onAdd(coursesT, qty);

      setShowCart(true)
    }

    const handleClick = () => {
      onAdd(coursesT, qty)
      if (!clicked) {
        setClicked(true);
      }
    }

  return (
    <section className='section flex flex-col md:flex-row gap-9 '>
      <div className='flex-1'>
        <div className=' shadow-xl'>
          <img className='bg-blue-600 p-3 rounded-md' src={image} alt="" />
        </div>
      </div>

      <div className='flex-1  '>
      <h1 className='text-2xl text-blue-600 font-bold'>{title}</h1>
      <div className=''>{category}</div>
      {/* <div className='font-bold text-Teal'>{Level}L</div> */}
      <div className='mt-4 font-bold text-blue-600'>Details</div>
      <div className=''>{details}</div>
      <div className='mt-3 text-3xl font-bold text-blue-600'>{price}</div>
      <div className='mt-4'>
      <button onClick={handleClick} disabled = {clicked} className='px-6 py-3 font-bold text-white bg-blue-600 rounded-lg mr-4 text-sm hover:text-blue-600 hover:bg-white border hover:border-blue-600 w-full'>Buy Now</button>
      {/* <button onClick={handleBuyNow} className=' py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold hover:bg-blue-600 hover:text-white hover:border-none'>Buy Now</button> */}
      </div>
      </div>
      
    </section>
  )
}

export default BookDetails;