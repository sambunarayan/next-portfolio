import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout';
import Head from 'next/head';
import { useRouter } from "next/router";
import Styles from '@/styles/aboutme.module.css';
import SystemStructure from '../components/projects/SystemStructure';
import Feature from '../components/projects/Feature';
import CiCd from '../components/projects/CiCd';

export default function ProjectDetail() {
    // const { post, isLoading, mutate } = usePost(router.query.post);
    const router = useRouter();
    const { post } = router.query;
    const data = JSON.parse(post);
    const imageSrc = data.imageSrc;
    const title = data.title;
    const detailText = data.detail_text;
    const startDate = data.start_date;
    const endDate = data.end_date;
    const tags = data.tags;
    const github = data.github;
    const purpose = data.purpose;
    const system_structure = data.system_structure;
    const features = data.features;
    // console.log(detailText);
    return (
        <>
            <Head>
                <title>Jeus portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <div className="rounded-lg h-70 overflow-hidden mb-20">
                            <Image
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
                        <div class="text-center lg:w-2/4 w-full">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">{title}</h1>
                            <p class="mb-8 leading-relaxed">{detailText.split("\n").map((s) => (
                                <div>{s}</div>
                            ))}</p>
                            <div className={Styles.cbody}>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center">
                                        <h3>開発期間</h3>
                                        <div className="project-sub">{startDate} ~ {endDate}</div>
                                    </div>
                                </div>
                                <div className={Styles.itemdiv}>
                                    <div className="flex flex-col mb-2 lg:items-start items-center">
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
                                    <div className="flex flex-col mb-2 lg:items-start items-center">
                                        <h3>目的</h3>
                                        {purpose.map((pp) => (
                                            <li className="project-sub" key={pp.id}>{pp.name}</li>
                                        ))}
                                    </div>
                                </div>
                                <SystemStructure id={system_structure.id} files={system_structure.files} explains={data.structureExplain}  />
                                <Feature id={features.id} features={features.multi_select} />
                                <CiCd/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    return {
        props: { query },
    };
}