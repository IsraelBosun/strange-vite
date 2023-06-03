import React, {useState} from 'react'
import { books } from "../container/Data"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import BooksContainer from '../container/BooksContainer.jsx'
import { TypingText } from '../container/TypingTexts';
import { fadeIn, staggerContainer } from '../container/Data'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";



const Books = () => {

    const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  
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

            <div className='mt-12 '>
                <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        spaceBetween={20}
                        pagination={{
                          type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                className=''>
                    {books.slice(0, 4).map(course => {
                        return ( <SwiperSlide className=''>
                            <BooksContainer key={course.id} {...course} />
                        </SwiperSlide>
                        ) 
                    })}
                </Swiper>
            </div>
        </motion.section>
    )
}

export default Books