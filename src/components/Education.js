import React, {useRef} from 'react';
import {motion,useScroll} from "framer-motion";
import Lilicon from "@/components/Lilicon";

const Details = ({time,type, place , info}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className={'my-8 first:mt-0 first:mb-0 items-center w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'}>
            <Lilicon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className={'capitalize font-bold text-2xl sm:text-2xl sm:text-xl xs:text-lg'}>{type}</h3>
                <span className={'capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'}>
                  {time} | {place}
              </span>
                <p className={'font-medium w-full md:text-sm'}>
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
            <h2 className={'font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'}>Образование</h2>
            <div ref={ref} className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>

                <motion.div style={{scaleY: scrollYProgress}} ref={ref} className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'}/>

                <ul className={'w-full flex flex-col items-start justify-between ml-4 xs:ml-2'}>
                    <Details
                        type={"Прикладная информатика(по отрослям)"}
                        place={'Московский Колледж Градостроительства и Предпренимательства'}
                        time={'2016-2020'}
                        info={'Информационные системы, Базы данных, Базовое програмирование, Использование прикладных програм для строительства'}
                    />

                    <Details
                        type={"Веб-разработчик"}
                        place={'Яндекс Практикум'}
                        time={'2022-2023'}
                        info={'Курс посвященный веб разработке, БЭМ, HTML, CSS, JavaScript,ReactJS,а так же разворачиванию полноценных веб приложений. '}
                    />

                    <Details
                        type={"Самостоятельное обучение"}
                        place={'Все ресурсы мира'}
                        time={'2024-'}
                        info={'Работа с различными фреймворками: Tailwind, Strapi, NextJS, Prisma,TypeScript'}
                    />

                </ul>
            </div>
        </div>
    );
};

export default Education;