import Layout from '@/components/layout';
import Link from 'next/link';

export default function Wiki() {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container h-screen place-content-center mx-auto pb-60 flex flex-wrap justify-center">
                    <div className="mb-2 w-3/7 text-center mb-2">
                        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2">Engineering Wiki</h2>
                        <h1 className="sm:text-1xl text-1xl text-gray-600 font-medium title-font mb-2">記憶より記録を。</h1>
                    </div>
                    <div className="w-4/7 md:pl-6">
                        <p className="leading-relaxed text-base">
                            勉強した内容と知り得た情報をWikiページにまとめています。<br />
                            Notion wikiページに記録してネットに公開しています。
                        </p>
                        <div className="flex md:mt-4 mt-6">
                            <Link href="https://jeus-tutorial-for-fsi.notion.site/103016b1cda54cc1baecc579a7290998?v=bd2c632e0a6d43e4a5bababc7f5fba8c" legacyBehavior>
                                <a className="text-indigo-500 dark:text-indigo-500 inline-flex items-center">Wiki page
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}