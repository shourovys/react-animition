import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

const PopUp = ({ showPopup, setShowPopup }) => {

    return (
        <AnimatePresence exitBeforeEnter>
            {
                showPopup &&
                <motion.div className='popup'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ when: 'beforeChildren', staggerChildren: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div className="popup-box"
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 140, damping: 10, mass: 1 }}
                        exit={{ y: '-100vh' }}
                    >
                        <h2>Let's Order again</h2>
                        <Link to='/'>
                            <motion.button
                                whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(255,255,255)', textShadow: '0 0 10px rgba(255,255,255)' }}
                                transition={{ yoyo: Infinity, duration: .3 }}
                            >OK</motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

            }
        </AnimatePresence>
    );
};

export default PopUp;