import Head from 'next/head';

export default function PageHead() {
    return (
        <Head>
          <title>Jeus portfolio</title>
          <meta name="description" content="This is Jaewoo Kim's Portfolio web page." />
          <meta property='og:type' content="website" />
          <meta property='og:title' content="Portfolio of Jaewoo Kim (Jeus Kim)" />
          <meta property='og:url' content="https://jeus-portfolio.vercel.app/" />
          <meta property='og:description' content="This is Jaewoo Kim's Portfolio web page." />
          <meta property='og:image' content="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf2949c0-146d-4462-b7d6-ae5536497f2f/jeus-portfolio-main-page.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230403T133839Z&X-Amz-Expires=3600&X-Amz-Signature=7d43dc41f79eeff822a0d9b42d4d164ce9ec50851fd65d67d07148411ddf9271&X-Amz-SignedHeaders=host&x-id=GetObject" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}