import Layout from '@/components/layout';
import Head from 'next/head';
import { TOKEN, PROJECTS_DATABASE_ID } from '../config';
import ProjectPreview from '../components/projects/ProjectPreview';

export default function Projects({ projects }) {
    return (
        <>
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
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-24 h-full bg-blue-500"></div>
                            </div>
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Projects</h1>
                                <p className="sm:w-3/5 text-end leading-relaxed text-base sm:pl-10 pl-0 pr-5">まだまだ勉強目的の個人プロジェクトのみですが、今後世の中に展開するサービスも開発したいと思います！</p>
                            </div>
                        </div>
                        <div className="justify-center flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            {projects.results.map((aProject) => (
                                <ProjectPreview id={aProject.id} data={aProject} />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
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
        body: JSON.stringify({
            page_size: 100,
            "sorts": [
                {
                    "property": "SeqNum",
                    "direction": "descending"
                }
            ]
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${PROJECTS_DATABASE_ID}/query`, options);
    const projects = await res.json();

    return {
        props: { projects }, // will be passed to the page component as props
    }
}