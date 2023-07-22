import Layout from '@/components/layout';
import Styles from '@/styles/aboutme.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { TOKEN, CAREER_DATABASE_ID } from '@/config';

export default function Career({ projects }) {
    const imageSrc = projects.results[0].cover.file?.url || projects.results[0].cover.external.url;
    const myName = projects.results[0].properties.FullName.rich_text[0].plain_text;
    const myAge = projects.results[0].properties.Age.rich_text[0].plain_text;
    const myAdress = projects.results[0].properties.Adress.rich_text[0].plain_text;
    const myEMail = projects.results[0].properties.Email.email;
    const myEducation = projects.results[0].properties.Education.rich_text[0].plain_text;

    return <>
        <Layout>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mb-10 mx-auto flex flex-wrap">
                    <div className="lg:w-2/5 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <div className="rounded-lg h-100 overflow-hidden">
                            <Image
                                src={imageSrc}
                                width="100"
                                height="60"
                                layout="responsive"
                                objectFit='contain'
                                alt="Jeus"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <li className="about-me-item">
                                Name
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">{myName}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <li className="about-me-item">
                                Birth
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">{myAge}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <li className="about-me-item">
                                City
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">{myAdress}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <li className="about-me-item">
                                e-mail
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">{myEMail}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <li className="about-me-item">
                                Education
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">{myEducation}</p>
                            </div>
                        </div>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-0 mt-10">Career</h1>
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <div className={Styles.cbody}>
                                <div className={Styles.itemdiv}>
                                    <h5><b>富士ソフト株式会社</b></h5>
                                    <p className="about-period">
                                        2017/1~現在
                                    </p>
                                    <br />
                                    <div className="text-slate-600 dark:text-slate-400">
                                        ソフトウェアの開発・販売、システムインテグレーションなどを行う企業です。<br />
                                        <br />
                                        金融システム開発部署に所属し、クレジットカードシステム開発に携わっています。<br />
                                        2017/1から顧客先（クレジットカード会社）のクレジットカードシステムの開発に携わっており、<br />
                                        顧客のニアショア開発拠点（自社）にてWebAPI、Batch、社内Webサイトなど、主にサーバーサイド開発を行っています。<br />
                                    </div>
                                    <div className="text-slate-600 dark:text-slate-400">
                                        <br />
                                        <p>
                                            <b>役割・ポジション</b><br />
                                            テックリーダーとして働いています。<br />
                                            社内で進行中のプロジェクトのコードレビューを行います。<br/>

                                        </p>
                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <Link href="/about-me-career/projects" legacyBehavior>
                                        <a className="btn-project btn-black">プロジェクト履歴へ</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </>
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
        props: { projects },
    }
}