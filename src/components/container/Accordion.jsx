/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Heading } from 'theme-ui';
import { BsArrowRight } from 'react-icons/bs';
import { BaseAccordion } from './BaseAccordion';
import { motion } from 'framer-motion';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './BaseAccordion';
import { rgba } from 'polished';

export default function Accordion({ items, ...props }) {
  return (
    <motion.article
    // initial={{ y: 100 }}
    // animate={{ y: 0 }}
    // transition={{ duration: 0.5 }}
    >
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props} className = "shadow-xl"
    >
      {({ openIndexes, handleItemClick }) => (
        <Fragment>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
              className={openIndexes.includes(index) ? 'is-open' : 'is-closed'}
            >
              <AccordionButton onClick={() => handleItemClick(index)} >
                <Heading as="h4" >{item.title}</Heading>
                {!openIndexes.includes(index) && (
                  <BsArrowRight size="28px" color={rgba('#0F2137', 0.3)}  />
                )}
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </Fragment>
      )}
    </BaseAccordion>
    </motion.article>
  );
}
