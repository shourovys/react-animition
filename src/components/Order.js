import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState, } from 'react';
const containerVariant = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    //mass : ~vor
    //damping : ~jumping
    transition: { type: 'spring', mass: 1, damping: 16, when: 'beforeChildren', staggerChildren: 1 }
    //when : when this animate exquisite
    //staggerChildren : define how match time to take for exquisite next children animate 
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}
const childVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 }
  }
}
const Order = ({ pizza, setShowPopup }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true)
    }, 5000);
  }, [setShowPopup])
  // const [showHeading, setShowHeading] = useState(true)
  // setTimeout(() => {
  //   setShowHeading(false)
  // }, 4000);
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/* <AnimatePresence> */}
      {
        // showHeading &&
        <motion.h2
        // exit={{ x: '-100vw' }}
        // transition={{ delay: .3, duration: .2 }}
        >Thank you for your order :)</motion.h2>
      }
      {/* </AnimatePresence> */}

      <motion.p
        variants={childVariant}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariant}
        transition={{}}

      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;