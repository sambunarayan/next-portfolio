import Head from 'next/head';
import Layout from '@/components/layout';
import { TOKEN, SKILL_DATABASE_ID } from '../config';
import SkillProgress from '../components/skills/skill-progress';

export default function Skill({ skillData }) {
    return (
        <Layout>
            <Head>
                <title>Jeus portfolio</title>
                <meta property='og:type' content="website"/>
                <meta property='og:title' content="Portfolio of Jaewoo Kim (Jeus Kim)"/>
                <meta property='og:url' content="https://jeus-portfolio.vercel.app/"/>
                <meta property='og:description' content="This is Jaewoo Kim's Portfolio web page."/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">SKILLS</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">得意なスキル・興味を持っているスキルなどをまとめてみました！</p>
                    </div>
                    <h3 className="sm:text-2xl title-font mb-2">Front-end</h3>
                    <div className="flex flex-wrap -m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="front-end" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mb-2">Back-end</h3>
                    <div className="flex flex-wrap -m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="back-end" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mb-2">Server</h3>
                    <div className="flex flex-wrap -m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="server" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mb-2">Database</h3>
                    <div className="flex flex-wrap -m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="db" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mb-2">CI / CD</h3>
                    <div className="flex flex-wrap -m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="cicd" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mb-2">Communication tools</h3>
                    <div className="flex flex-wrap -m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="communication-tools" skill={s} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
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
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${SKILL_DATABASE_ID}/query`, options);
    const skillData = await res.json();

    return {
        props: { skillData }, // will be passed to the page component as props
    }
}
