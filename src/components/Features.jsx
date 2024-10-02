import React, { useRef } from 'react';
import { featuresData } from '../data/dummy';
import { motion, useInView } from 'framer-motion';

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
  },
};

function Features() {
  // Use useRef to observe when the container comes into view
  const ref = useRef(null);
  
  // useInView hook to track if the element is in view
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Adjust the margin to trigger earlier

  return (
    <div className='h-[80vh]'>
      <p className='text-center font-bold text-5xl mt-60 mb-20'>Features & Key Aspects</p> {/* Reduced margin-bottom */}
      <div className=" w-screen flex justify-center items-center text-center px-12">
        {/* Wrapper for all cards */}
        <div ref={ref} className='w-full h-[50%]'>
          <motion.div
            className="flex flex-wrap justify-center items-start container"
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {featuresData.map((feature, index) => (
              <motion.div
                className="border-2 border-black drop-shadow-lg rounded-2xl text-custom-gradient p-12 m-4 w-[300px] flex flex-col items-center justify-center ml-12"
                key={feature.id}
                variants={item}
              >
                <div className="flex justify-center w-full">
                  <div className="text-4xl pb-4">{feature.icon}</div>
                </div>
                <div className="py-6 font-bold text-xl flex justify-start w-full">{feature.title}</div>
                <div className="flex justify-start w-full font-semibold">{feature.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
