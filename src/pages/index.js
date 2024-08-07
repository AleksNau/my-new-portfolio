import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";
import profilePic from '../../public/images/profile/developer-pic-1.jpg'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
            <title>AlexNow | Главная страница</title>
            <meta name="description" content="Мой сайт портфолио"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <TransitionEffect/>
      <main className={'flex items-center text-dark w-full min-h-screen dark:text-light'}>
          <Layout className={'pt-0 md:p-16 sm:pt-8'}>
              <div className="flex items-center justify-between w-full lg:flex-col gap-4">
                  <div className={'w-1/2 md:w-full'}>
                      <Image src={profilePic} alt={'CodeBucks'} className={'w-full h-auto lg:hidden md:inline-block md:w-full'} priority
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                  </div>
                  <div className={'w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'}>
                      <AnimatedText text={'Создаю проекты, для решения ваших задач'} className={'!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'}/>
                      <p className={'my-4 text-base font-medium md:text-sm sm:text-xs'}>Я опытный веб разработчик, превращу ваши фантазии в креативное веб приложение.
                          Тут вы найдете мои последние проекты и статьи, они выолнены на React.js и Next.js.
                      </p>
                      <div className={'flex items-center self-start mt-2 lg:self-center'}>
                          <Link href={'https://myresume.ru/resume/vAapfvdGshr/'}
                                target={'_blank'}
                                className={'flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark dark:text-dark dark:bg-light hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:p-2 md:px-4 md:text-base'}

                          >Резюме <LinkArrow className={'w-6 ml-1'}/></Link>
                          <Link className={'ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base '} href={'mailto:workciti@yandex.ru'} target={'_blank'}>Контакты</Link>
                      </div>
                  </div>
              </div>
          </Layout>
          <HireMe/>
      </main>
    </>
  )
}
