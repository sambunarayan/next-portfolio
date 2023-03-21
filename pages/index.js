import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '../components/home/hero';

export default function Home() {
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
            <Hero />
          </div>
        </section>
      </Layout>
    </div>
  )
}
