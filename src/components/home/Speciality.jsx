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
    title: (<div className ="font-bold  text-blue-600">I have high BP. When will I stop taking  hypertension medications? </div>), 
    contents: (
      <div>
        The decision to stop taking hypertension medications should be made in consultation with your doctor, who will assess your blood pressure levels and overall health to determine if and when it's appropriate to discontinue medication.
      </div>
    ),
  },
  {
    title: (<div className = "font-bold text-blue-600"> My mom (or dad) has hypertension, what can I do to prevent stroke?</div>),
    contents: (
      <div className=''>
        To prevent stroke if your parent has hypertension, focus on maintaining a healthy lifestyle with regular exercise, a balanced diet low in sodium and saturated fats, and managing stress levels, while also getting regular blood pressure check-ups.
      </div>
    ),
  },
  {
    title: (<div className='font-bold text-blue-600'>What can I do to lose weight and sustain it.</div>), 
    contents: (
      <div>
        To lose weight and sustain it, adopt a balanced approach that includes a combination of regular physical activity, a nutritious diet consisting of whole foods and portion control, and building healthy habits like mindful eating and staying hydrated. Consider consulting a healthcare professional or registered dietitian for personalized guidance.
      </div>
    ),
  },
  // {
  //   title: (<div className = "font-bold text-blue-600">How can Nigerian entrepreneurs improve their chances of obtaining financing for their startup ventures?</div>),
  //   contents: (
  //     <div className=''>
  //       Nigerian entrepreneurs can enhance their chances of securing financing by creating a compelling business plan, demonstrating a strong market opportunity, building a reputable network, and showcasing a solid track record or proof of concept to potential investors or funding institutions.
  //     </div>
  //   ),
  // },
  // {
  //   title: (<div className='font-bold text-blue-600'>What are some key strategies for entrepreneurs to survive and thrive in the Nigerian business landscape?</div>), 
  //   contents: (
  //     <div>
  //       To survive as an entrepreneur in Nigeria, it is crucial to stay adaptable, build strong networks, continuously innovate, navigate regulatory challenges, and embrace the potential of technology to overcome infrastructure limitations and reach a wider customer base.
  //     </div>
  //   ),
  // },
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
          <TypingText title = "Top 5 questions that brings people here" textStyles = "text-center text-xl font-bold mb-4" subtitle="Hello" />
          
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











