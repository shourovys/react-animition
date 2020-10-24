import { motion } from 'framer-motion';
import React from 'react';

const headerVariant = {
  initial: { y: '-20rem' },
  animate: {
    y: '0rem',
    transition: { delay: .3, duration: 10, type: 'spring', stiffness: 120, }
  }
}
const svgVariant = {
  initial: { rotate: 180 },
  animate: {
    rotate: 0,
    transition: { duration: .3, when: 'beforeChildren', staggerChildren: 2 }
  }
}
const bigPathVariant = {
  initial: { opacity: 0, pathLength: 0, when: 'beforeChildren', staggerChildren: 1 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 3, delay: 1 }
  }
}
const smallPathVariant = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2 }
  }
}



const Header = () => {
  return (
    <motion.header
      variants={headerVariant}
      initial='initial'
      animate='animate'
    >
      <div className="logo">
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVariant}
        >
          <motion.path
            //big
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={bigPathVariant}

          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={smallPathVariant}
          />


        </motion.svg>
      </div>
      <div className="title">
        <h1>Pizza Joint</h1>
      </div>
    </motion.header>
  )
}

export default Header;