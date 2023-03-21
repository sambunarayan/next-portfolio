import Head from 'next/head';
import Layout from '@/components/layout';
import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '/public/contact-animate.json';
import { TOKEN, CAREER_DATABASE_ID } from '../config';

export default function ContactMe({ projects }) {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Jeus portfolio</title>
                    <meta property='og:type' content="website" />
                    <meta property='og:title' content="Portfolio of Jaewoo Kim (Jeus Kim)" />
                    <meta property='og:url' content="https://jeus-portfolio.vercel.app/" />
                    <meta property='og:description' content="This is Jaewoo Kim's Portfolio web page." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-[50%] lg:w-full md:w-1/2">
                            <Lottie
                                loop
                                animationData={lottieJson}
                                play
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact me !
                                <br className="hidden lg:inline-block" />
                            </h1>
                            <p className="mb-8 leading-relaxed">e-mail : {projects.results[0].properties.Email.email}</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ page_size: 100 })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${CAREER_DATABASE_ID}/query`, options);
    const projects = await res.json();

    return {
        props: { projects }, // will be passed to the page component as props
    }
}