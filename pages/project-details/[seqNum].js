import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout';
import Head from 'next/head';
import Styles from '@/styles/aboutme.module.css';
import ServerSpec from '@/components/projects/ServerSpec';
import SystemStructure from '@/components/projects/SystemStructure';
import Feature from '@/components/projects/Feature';
import CiCd from '@/components/projects/CiCd';
import Monitoring from '@/components/projects/Monitoring';
import { TOKEN, PROJECTS_DATABASE_ID } from '@/config';

export default function ProjectDetail({ project }) {
    const data = project.results[0];
    const seqNum = data.properties.SeqNum.rich_text[0].text.content;
    const title = data.properties.名前.title[0].plain_text
    const start_date = data.properties.WorkPeriod.date.start
    const end_date = data.properties.WorkPeriod.date.end
    const detail_text = data.properties.Description.rich_text[0].plain_text
    const imageSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.タグ.multi_select;
    const github = data.properties.Github.url;
    const purpose = data.properties.Purpose.multi_select;
    const improvements = data.properties.Improvements.multi_select;
    const system_structure = data.properties.StructureImage;
    const structureExplain = data.properties.StructureExplain.multi_select;
    const features = data.properties.Features;

    return (
        <>
            <Head>
                <title>Jeus portfolio</title>
                <meta property='og:type' content="website" />
                <meta property='og:title' content="Portfolio of Jaewoo Kim (Jeus Kim)" />
                <meta property='og:url' content="https://jeus-portfolio.vercel.app/" />
                <meta property='og:description' content="This is Jaewoo Kim's Portfolio web page." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
                        <div className="rounded-lg h-70 overflow-hidden mb-20">
                            <Image
                                className="border-2"
                                src={imageSrc}
                                width={400}
                                height={200}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                quality="100"
                            />
                        </div>
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">{title}</h1>
                            <div className="mb-8 leading-relaxed text-slate-800 dark:text-slate-300">{detail_text.split("\n").map((s) => (
                                <div>{s}</div>
                            ))}</div>
                            <div className={Styles.cbody}>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                                        <h3>開発期間</h3>
                                        <div className="project-sub">{start_date} ~ {end_date}</div>
                                    </div>
                                </div>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                                        <h3>Skill</h3>
                                        <div className={Styles.sub}>
                                            <div className="flex flex-wrap items-start mt-2 ">
                                                {tags.map((aTag) => (
                                                    <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 m-1" key={aTag.id}>
                                                        {aTag.name}
                                                    </h1>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center">
                                        <h3>Github url</h3>
                                        <div className={Styles.sub}>
                                            <Link href={github} legacyBehavior>
                                                <a target="_blank">{github}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                                        <h3>目的</h3>
                                        {purpose.map((pp) => (
                                            <li className="project-sub" key={pp.id}>{pp.name}</li>
                                        ))}
                                    </div>
                                </div>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                                        <h3>改善点 / 今後の目標</h3>
                                        {improvements.map((pp) => (
                                            <li className="project-sub text-left" key={pp.id}>{pp.name}</li>
                                        ))}
                                    </div>
                                </div>
                                <ServerSpec id={`ServerSpec ${seqNum}`} seqNum={seqNum} />
                                <SystemStructure id={system_structure.id} files={system_structure.files} explains={structureExplain} />
                                <Feature id={features.id} seqNum={seqNum} features={features.multi_select} />
                                <CiCd id={`CiCd ${seqNum}`} seqNum={seqNum} />
                                <Monitoring id={`Monitoring ${seqNum}`} seqNum={seqNum} />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const { seqNum } = params;

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
            "filter": {
                "property": "SeqNum",
                "rich_text": {
                    "equals": seqNum
                }
            }
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${PROJECTS_DATABASE_ID}/query`, options);
    const project = await res.json();

    console.log(project);
    return {
        props: {
            project,
        }
    };
}