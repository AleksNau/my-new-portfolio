import React from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={'w-full border-t-2 border-solid border-dark font-medium text-lg'}>
            <Layout className={'py-8 flex items-center justify-between'}>
                <span>{new Date().getFullYear()} &copy; All rights reserved</span>
                <div className={'flex items-center'}>
                    Build With <span className={'text-primary text-xl px-1 '}>&#9825;</span>
                    by&nbsp;<Link className={'underline underline-offset-2'} href={'/'}>CodeBuks</Link>
                </div>

                <Link href={'/'} target={'_blank'} className={'underline underline-offset-2'}>Say hello</Link>
            </Layout>
        </footer>
    );
};

export default Footer;