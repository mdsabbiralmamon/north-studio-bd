'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuPencil } from 'react-icons/lu';
import { MdAnimation } from 'react-icons/md';
import { SlCup } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import WhatWeDoCard from '@/components/Shared/WhatWeDoCard/WhatWeDoCard';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6 },
    }),
};

const OurServices = () => {
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
        <div className='text-center'>
            <div>
                <motion.div
                    className="text-center text-xl font-bold uppercase"
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h3
                        className="customTextBorder p-2"
                        custom={0}
                        variants={textVariants}
                    >
                        On This We Work
                    </motion.h3>
                    <motion.h2
                        className="text-5xl my-4"
                        custom={1}
                        variants={textVariants}
                    >
                        Exclusive Services
                    </motion.h2>
                </motion.div>
                <motion.div
                    className="grid gap-8 grid-cols-1 lg:grid-cols-3 my-24"
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                >
                    <WhatWeDoCard
                        number="01"
                        Icon={LuPencil}
                        title="Architecture"
                        description="Architecture blends art and science to design and construct buildings that are functional and visually appealing."
                        custom={2}
                    />
                    <WhatWeDoCard
                        number="02"
                        Icon={SlCup}
                        title="Interior Decor"
                        description="Interior decor involves arranging furniture, colors, and accessories to create attractive and functional indoor spaces."
                        custom={3}
                    />
                    <WhatWeDoCard
                        number="03"
                        Icon={MdAnimation}
                        title="Animation"
                        description="Animation is the creation of moving images through a sequence of still pictures, used in entertainment and communication."
                        custom={4}
                    />
                    <WhatWeDoCard
                        number="04"
                        Icon={SlCup}
                        title="Designing And Planing"
                        description="We bring visionary concepts to life by meticulously designing and planning spaces that are both functional and inspiring."
                        custom={5}
                    />
                    <WhatWeDoCard
                        number="05"
                        Icon={MdAnimation}
                        title="WorkSpace"
                        description="We create dynamic workspaces that foster productivity, collaboration, and innovation, tailored to meet the unique needs of every team."
                        custom={6}
                    />
                    <WhatWeDoCard
                        number="06"
                        Icon={LuPencil}
                        title="Exterior Design"
                        description="We design striking exteriors that blend aesthetics and functionality, ensuring every building makes a lasting impression while standing the test of time."
                        custom={7}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default OurServices;