import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { founderInfo, viceFounderInfo } from '../data/dummy';

const fadeInVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.8,
    },
  },
};

function About() {
  return (
    <>
      {/* Founder Section */}
      <div className='flex flex-col items-center justify-center'>
        <p className='text-center font-bold text-4xl mb-8'>Meet the Founder & Co-Founder</p>
        <div className='flex justify-center items-center w-[70%] p-8 rounded-lg'>
          {/* Text (Animated from Left) */}
          <motion.div 
            className='w-[60%] pr-8'
            custom="left"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            <p className='text-5xl font-semibold'>{founderInfo.name}</p>
            <p className='text-xl font-medium'>{founderInfo.title}</p>
            <p className='mt-4'>{founderInfo.bio}</p>
            <p className='mt-4'>
              <button className='text-blue-500 hover:underline flex items-center'>
                Learn More 
                <span><img width="25" height="25" className='mx-4' src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right"/></span>
              </button>
            </p>
          </motion.div>
          
          {/* Image (Animated from Right) */}
          <motion.div
            className='w-[40%]'
            custom="right"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            <img src={founderInfo.image} alt="Founder" className='m-12 rounded-lg' height={580} width={420} />
          </motion.div>
        </div>
      </div>

      {/* Vice Founder Section */}
      <div className='flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center w-[70%] p-8 rounded-lg'>
          
          {/* Image (Animated from Left) */}
          <motion.div
            className='w-[40%] mr-32'
            custom="left"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            <img src={viceFounderInfo.image} alt="Vice Founder" className='m-12 rounded-lg' height={580} width={420} />
          </motion.div>
          
          {/* Text (Animated from Right) */}
          <motion.div
            className='w-[60%]'
            custom="right"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            <p className='text-5xl font-semibold'>{viceFounderInfo.name}</p>
            <p className='text-xl font-medium'>{viceFounderInfo.title}</p>
            <p className='mt-4'>{viceFounderInfo.bio}</p>
            <p className='mt-4'>
              <button className='text-blue-500 hover:underline flex items-center'>
                Learn More 
                <span><img width="25" height="25" className='mx-4' src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right"/></span>
              </button>
            </p>
          </motion.div>
          
        </div>
      </div>
    </>
  );
}

export default About;
