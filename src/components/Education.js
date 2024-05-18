import React, {useRef} from 'react';
import {motion,useScroll} from "framer-motion";
import Lilicon from "@/components/Lilicon";

const Details = ({time,type, place , info}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className={'my-8 first:mt-0 first:mb-0 items-center w-[60%] mx-auto flex flex-col justify-between'}>
            <Lilicon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className={'capitalize font-bold text-2xl'}>{type}</h3>
                <span className={'capitalize font-medium text-dark/75 dark:text-light/75'}>
                  {time} | {place}
              </span>
                <p className={'font-medium w-full'}>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:['start end','center start'],
    })


    return (
        <div className={'my-64 '}>
            <h2 className={'font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'}>Education</h2>
            <div className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>

                <motion.div style={{scaleY: scrollYProgress}} ref={ref} className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'}/>

                <ul className={'w-full flex flex-col items-start justify-between ml-4'}>
                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        time={'2016-2020'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
                    />

                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        time={'2016-2020'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
                    />
                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        time={'2016-2020'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
                    />
                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        time={'2016-2020'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;