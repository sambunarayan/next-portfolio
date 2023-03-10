import Layout from '@/components/layout';
import Head from 'next/head';
import Styles from '@/styles/aboutme.module.css';
import Image from 'next/image';
import { TOKEN, CAREER_DATABASE_ID } from '../config';

export default function Career({ projects }) {
    const imageSrc = projects.results[0].cover.file?.url || projects.results[0].cover.external.url;
    const myName = projects.results[0].properties.FullName.rich_text[0].plain_text;
    const myAge = projects.results[0].properties.Age.rich_text[0].plain_text;
    const myAdress = projects.results[0].properties.Adress.rich_text[0].plain_text;
    const myEMail = projects.results[0].properties.Email.email;
    const myEducation = projects.results[0].properties.Education.rich_text[0].plain_text;
    console.log(myName);
    return <>
        <Head>
            <title>Jeus portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
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
                                    <h5><b>???????????????????????????</b></h5>
                                    <p className="about-period">
                                        2017/1~??????
                                    </p>
                                    <br />
                                    <div className="text-slate-600 dark:text-slate-400">
                                        ????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                                        <br />
                                        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                                        2017/1?????????????????????????????????????????????????????????????????????????????????<br />
                                        ??????????????????????????????????????????????????????WebAPI???Batch?????????Web???????????????????????????????????????????????????????????????????????????<br />
                                    </div>
                                    <br />
                                    <hr />
                                    <h3>?????????????????????????????????</h3>
                                    <p className="about-period pl-4">2017??? - 2020???</p><br />

                                    <div className="mb-2">
                                        <li className="about-me-item">?????????????????????????????????</li>
                                        <div className="about-me-sub">
                                            IFRS??????????????????????????????
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <li className="about-me-item">?????????????????????????????????</li>
                                        <div className="about-me-sub">
                                            ????????????????????????????????????????????????
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <li className="about-me-item">??????????????????????????????</li>
                                        <div className="about-me-sub">
                                            ?????????????????????????????????WebAPI??????<br />
                                            ?????????????????????API??????
                                        </div>
                                    </div>

                                    <h3>Token??????????????????????????????</h3>
                                    <p className="about-period pl-4">2021??? - 2022???</p><br />
                                    <div className="mb-2">
                                        <li className="about-me-item">????????????????????????VISA, MasterCard??????????????????????????????</li>
                                        <div className="about-me-sub">
                                            Token???????????????????????????????????????<br />
                                            ?????????????????????????????????????????????????????????????????????????????????
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">???????????????????????????</li>
                                        <div className="about-me-sub">
                                            Kafka????????????????????????????????????????????????????????????<br />
                                            ????????????????????????????????????????????????????????????????????????<br />
                                            ?????????????????????Batch??????
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">?????????????????????</li>
                                        <div className="about-me-sub">
                                            ????????????????????????<br />
                                            ?????????????????????JavaEE???Kubernetes??????????????????????????????????????????<br />
                                            ???????????????????????????<br />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">???????????????????????????Payara web server???Kubernetes POD ??????????????????</li>
                                        <li className="about-me-item">Real??????????????????????????????????????????</li>
                                        <div className="about-me-sub">
                                            ???????????????????????????????????????????????????<br />
                                            ??????????????????????????????Tool??????<br />
                                            ??????????????????????????????????????????
                                        </div>
                                    </div>
                                    <h3>???????????????????????????Web???????????????</h3>
                                    <p className="about-period pl-4">2023??? - ??????</p><br />
                                    <div className="mb-2">
                                        <li className="about-me-item">?????????????????????</li>
                                        <div className="about-me-sub">
                                            ??????????????????????????????????????????????????????<br />
                                            ????????????????????????????????????????????????????????????????????????????????????
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">???????????????????????????</li>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">?????????????????????</li>
                                        <div className="about-me-sub">
                                            ????????????????????????<br />
                                            ???????????????????????????<br />
                                            ????????????????????????????????????????????????
                                            ????????????????????????????????????????????????????????????????????????<br />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">JSF???????????????</li>
                                    </div>
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
        props: { projects }, // will be passed to the page component as props
    }
}