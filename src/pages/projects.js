import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@/components/Icons";
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import {motion} from "framer-motion";

const FramerImage = motion(Image)

const FeaturedProject = ({type,title,summury,img,link,github}) => {
  return(
      <article className={'w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light'}>
          <div className={'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'}/>
          <Link href={link} target={'_blank'} className={'w-1/2 cursor-pointer overflow-hidden rounded-lg'}>
                <FramerImage src={img} alt={title} className={'w-full h-auto'} whileHover={{scale:1.05}}
                             transition={{duration:0.2}}/>
          </Link>
              <div className={'w-1/2 flex flex-col items-start justify-between pl-6'}>
                  <span className={'font-medium text-primary text-xl dark:text-primaryDark'}>{type}</span>
                  <Link href={link} target={'_blank'} className={'hover:underline underline-offset-2'}>
                      <h2 className={'my-2 text-left text-4xl text-dark font-bold dark:text-light'}>{title}</h2>
                  </Link>
                  <p className={'my-2 font-medium text-dark dark:text-light'}>{summury}</p>
                  <div className={'mt-2 flex items-center'}>
                      <Link className={'w-10'} href={github} target={'_blank'}> <GithubIcon/></Link>
                      <Link className={'ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light'} href={link} target={'_blank'}>Visit Project</Link>
                  </div>
              </div>

      </article>
  )
}

const Project = ({type,title,img,link,github}) => {
  return(
      <article className={'w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'}>
          <div className={'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'}/>
          <Link href={link} target={'_blank'} className={'w-full cursor-pointer overflow-hidden rounded-lg'}>
              <FramerImage src={img} alt={title} className={'w-full h-auto'} whileHover={{scale:1.05}}
                     transition={{duration:0.2}} priority
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
          </Link>
          <div className={'w-full flex flex-col items-start justify-between mt-4'}>
              <span className={'font-medium text-primary text-xl dark:text-primaryDark'}>{type}</span>
              <Link href={link} target={'_blank'} className={'hover:underline underline-offset-2'}>
                  <h2 className={'my-2 text-left text-3xl font-bold text-dark dark:text-light'}>{title}</h2>
              </Link>
              <div className={'w-full mt-2 flex items-center justify-between'}>
                  <Link className={'text-lg font-semibold underline underline-offset-2 text-dark dark:text-light'} href={link} target={'_blank'}>Visit</Link>
                  <Link className={'w-10'} href={github} target={'_blank'}> <GithubIcon/></Link>
              </div>
          </div>
      </article>
  )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>CodeBuks | Projects page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'w-full mb-16 flex flex-col items-center justify-center'}>
                <Layout className={'pt-16'}>
                <AnimatedText text={'Imagination Trumps Knowledge!'} className={'mb-16'}/>
                    <div className={'grid grid-cols-12 gap-24 gap-y-32'}>
                        <div className={'col-span-12'}>
                            <FeaturedProject link={'/'} type={'Featured Project'} title={'Crypto Screener Application'} github={'/'} img={project1} summury={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.\n' +
                                '                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your\n' +
                                '                            local currency.'}/>
                        </div>
                        <div className={'col-span-6'}>
                            <Project link={'/'} type={'Featured Project'} title={'Crypto Screener Application'} github={'/'} img={project1} />
                        </div>
                        <div className={'col-span-6'}>
                            <Project link={'/'} type={'Featured Project'} title={'Crypto Screener Application'} github={'/'} img={project1} />

                        </div>
                        <div className={'col-span-6'}>
                            <Project link={'/'} type={'Featured Project'} title={'Crypto Screener Application'} github={'/'} img={project1} />

                        </div>
                        <div className={'col-span-6'}>
                            <Project link={'/'} type={'Featured Project'} title={'Crypto Screener Application'} github={'/'} img={project1} />

                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;