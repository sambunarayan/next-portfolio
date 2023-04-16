import Layout from '@/components/layout';
import { TOKEN, SKILL_DATABASE_ID } from '../config';
import SkillProgress from '../components/skills/skill-progress';

export default function Skill({ skillData }) {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mb-5 mx-auto">
                    <div className="flex flex-wrap w-full mt-2 mb-10 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-7 mb-3 text-gray-900">SKILLS</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">得意なスキル・興味を持っているスキルなどをまとめてみました！</p>
                    </div>
                    <h3 className="sm:text-2xl title-font mb-3 text-lime-600 dark:text-lime-200">Front-end</h3>
                    <div className="flex flex-wrap m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="front-end" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mt-7 mb-3 text-lime-600 dark:text-lime-200">Back-end</h3>
                    <div className="flex flex-wrap m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="back-end" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mt-7 mb-3 text-lime-600 dark:text-lime-200">Server</h3>
                    <div className="flex flex-wrap m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="server" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mt-7 mb-3 text-lime-600 dark:text-lime-200">Database</h3>
                    <div className="flex flex-wrap m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="db" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mt-7 mb-3 text-lime-600 dark:text-lime-200">CI / CD</h3>
                    <div className="flex flex-wrap m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="cicd" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mt-7 mb-3 text-lime-600 dark:text-lime-200">Version control</h3>
                    <div className="flex flex-wrap m-4 mb-1">
                        {skillData.results.map((s) => (
                            <SkillProgress area="version-control" skill={s} />
                        ))}
                    </div>
                    <h3 className="sm:text-2xl title-font mt-7 mb-3 text-lime-600 dark:text-lime-200">Communication tools</h3>
                    <div className="flex flex-wrap m-4 mb-1">
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
