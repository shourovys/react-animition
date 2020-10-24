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
    transition: { delay: 1, type: 'spring', stiffness: 120 }
  },
  whileHover: {
    scale: 1.1,
    boxShadow: '0 0 8px rgba(255,255,255)',
    textShadow: '0 0 8px rgba(255,255,255)',
    transition: { duration: .3, yoyo: Infinity }

  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              variants={liVariant}
              transition={{ type: 'spring', stiffness: 300 }}
              whileHover="whileHover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={btnVariant}
          whileHover="whileHover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;