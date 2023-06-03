/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import Accordion from "../container/Accordion"
import { motion } from 'framer-motion'
import { TypingText } from '../container/TypingTexts';
import { fadeIn, staggerContainer } from '../container/Data'



const data = [
  {
    title: (<div className ="font-bold  text-blue-600">To find a solution to their hypertension</div>), 
    contents: (
      <div>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
  {
    title: (<div className = "font-bold text-blue-600">To overcome diabetes</div>),
    contents: (
      <div className=''>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
  {
    title: (<div className='font-bold text-blue-600'>To develop a super powered memory</div>), 
    contents: (
      <div>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
  {
    title: (<div className = "font-bold text-blue-600">Collaborate your documents easily</div>),
    contents: (
      <div className=''>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
  {
    title: (<div className='font-bold text-blue-600'>Build your team's knowledge base</div>), 
    contents: (
      <div>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
];


const Specialty = () => {
  return (
    <motion.section
    variants={staggerContainer}
    initial = "hidden"
    whileInView= "show"
    viewport={{once: false, amount: 0.25}}
    className='section flex  flex-col items-center justify-center'>
          {/* <div className = "text-xl font-bold mb-4 text-center">Top <span className='text-blue-600'>5 questions </span>  that brings people to  my website</div> */}
          <TypingText title = "Top 5 questions that brings people to my website" textStyles = "text-center text-xl font-bold mb-4" subtitle="Hello" />
          
          <Box sx={styles.accordionGroup} >
            <Accordion items={data} />
          </Box>
  </motion.section>
  )
}
// {<>Top <span className='text-blue-600'>5 questions that brings people to my website</span></>}
export default Specialty

const styles = {
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
  },
  illustration: {
    display: ['none', 'none', 'block'],
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};











