import React from 'react'
import { fadeIn } from './Data'
import { motion } from 'framer-motion'
import styles from './Data'
import { Link } from 'react-router-dom'

const BlogContainer = ({ image, title, text, button, id, imgUrl, index, active, handleClick }) => {
  return (
    // <div className='flex flex-col gap-4 items-center '> 
    //   <div className = "bg-blue-600 p-2 rounded-lg">
    //     <img src = {image} className='rounded-lg' alt ="blogging" />
    //   </div >
    //   <div className=''>
    //   <p className='text-lg font-bold '>{title}</p>
    //   <p className=' py-2 text-sm'>{text}</p>
    //   <button className = " px-4 py-2 w-full font-bold text-white bg-blue-600 rounded-lg mr-4 text-sm hover:text-blue-600 hover:bg-white border">Read More...</button>
    //   </div>
    // </div>

    <motion.div
    // variants = {fadeIn("right", "spring", index * 0.5, 0.75)}
    className = {`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
    onClick = {() => handleClick(id)}
    >
      <img 
      src={imgUrl}
      alt = {title}
      className = "absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3
        className="font-semibold sm:text-[26px] text-[]-18px text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
        >
          {title}
        </h3>
      ) : (
          <div className="absolute bottom-0 p-8 justify-start h-full w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] ">
            <div className= {`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
              {/* <img 
              src="/headset.svg" 
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
              /> */}
            </div>
            <h2 className="mt-[24] font-semobold sm:text-[32px] text-[24px] text-white" >
              {title}
            </h2>
            <Link to = "" className="font-normal bg-blue-600 px-3 rounded-xl py-1 w-1/2 mt-7  leading-[20px] text-white uppercase  " >
              Read More
            </Link >
          </div>
      )}
      Explore Card
    </motion.div>
  )
}

export default BlogContainer