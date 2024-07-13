'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 + 0.3, duration: 0.3 }
  })
};

const lineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scaleX: 1,
      transition: { delay: i * 0.3, duration: 0.3, ease: "easeInOut" }
    })
};

const svgVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3 + 0.3, duration: 0.3 }
  })
};

export default function OurAdvantageSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <motion.div 
        className='text-center text-xl font-bold uppercase'
        initial="hidden"
        animate={controls}
      >
        <motion.h3 
          className='customTextBorder p-2'
          custom={0}
          variants={textVariants}
        >
          Our Advantages
        </motion.h3>
        <motion.h2 
          className='text-5xl my-4 max-w-4xl mx-auto leading-snug'
          custom={1}
          variants={textVariants}
        >
          We take care of everything for you!
        </motion.h2>
        <motion.p 
          className='text-base font-normal lowercase first-letter:uppercase max-w-2xl mx-auto'
          custom={2}
          variants={textVariants}
        >
          With our comprehensive services, you can sit back and relax while we handle all the details. From planning to execution, we ensure every aspect of your project is managed seamlessly, so you can focus on what matters most to you.
        </motion.p>
      </motion.div>
      <motion.div 
        className='my-16'
        initial="hidden"
        animate={controls}
      >
        <ul className="timeline timeline-vertical">
          {[
            {
              title: "Listen",
              description: "First, we take the time to understand your needs and vision. Our team listens carefully to your ideas, goals, and concerns, ensuring we have a clear understanding of what you want to achieve."
            },
            {
              title: "Strategies",
              description: "Next, we develop tailored strategies designed to meet your specific goals. Our experts craft a detailed plan, leveraging the latest trends and technologies to create a roadmap that sets your project on the path to success."
            },
            {
              title: "Project Work",
              description: "During the project work phase, our skilled team brings the strategy to life with precision and creativity. We handle all aspects of the implementation, ensuring high standards of quality and timely progress at every step."
            },
            {
              title: "Launch",
              description: "Finally, we orchestrate a smooth and successful launch. Our team manages all the final details, ensuring everything is perfectly in place for a seamless rollout. We’re here to support you, celebrating your success and ensuring your project reaches its full potential."
            }
          ].map((item, index) => (
            <li key={index}>
              <motion.hr 
                className="bg-black h-1"
                custom={index * 2}
                variants={lineVariants}
                initial="hidden"
                animate={controls}
                style={{ transformOrigin: 'left' }}
              />
              <motion.div 
                className={`timeline-${index % 2 === 0 ? 'start' : 'end'} timeline-box rounded-md`}
                custom={index * 2 + 1}
                variants={textVariants}
              >
                <h2 className='font-bold text-xl border-b border-b-gray-300 w-full py-2'>{item.title}</h2>
                <p className='py-2'>{item.description}</p>
              </motion.div>
              <motion.div 
                className="timeline-middle"
                custom={index * 2 + 1}
                variants={svgVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-5 h-5 text-primary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <motion.hr 
                className="bg-black h-1"
                custom={index * 2 + 2}
                variants={lineVariants}
                initial="hidden"
                animate={controls}
                style={{ transformOrigin: 'left' }}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
