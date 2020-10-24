import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariant = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: .5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const liVariant = {
  whileHover: {
    scale: 1.3,
    color: '#f8e112',
    originX: 0
  }
}

const btnVariant = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  },
  whileHover: {
    scale: 1.1,
    boxShadow: '0 0 8px rgba(255,255,255)',
    textShadow: '0 0 8px rgba(255,255,255)',
    transition: { duration: .3, yoyo: Infinity }

  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return (
    <motion.div className="base container"
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              variants={liVariant}
              whileHover='whileHover'
              transition={{ type: 'spring', stiffness: 300 }}

            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              variants={btnVariant}
              whileHover="whileHover"
              transition={{ type: 'spring', stiffness: 120 }}
            >Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;