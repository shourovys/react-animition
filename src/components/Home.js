import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const containerVariant = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, when: 'beforeChildren', staggerChildren: 1, type: 'spring', stiffness: 120 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const h2Variant = {
  initial: {
  },
  animate: {
    scale: [1, 1.2],
    transition: { type: 'spring', stiffness: 120 }
  }
}

const btnVariant = {
  whileHover: {
    scale: 1.1,
    boxShadow: '0 0 8px rgba(255,255,255)',
    textShadow: '0 0 8px rgba(255,255,255)',
    transition: { duration: .4, yoyo: Infinity }
  }
}

const Home = () => {

  return (
    <motion.div className="home container"
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.h2
        variants={h2Variant}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={btnVariant}
          whileHover="whileHover"

        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;