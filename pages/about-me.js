import Layout from '@/components/layout';
import Styles from '@/styles/aboutme.module.css';
import Image from 'next/image';
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
                                氏名
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">{myName}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <li className="about-me-item">
                                所属
                            </li>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed text-base">福岡第３オフィス</p>
                            </div>
                        </div>
                        {/* <div className="flex flex-col mb-2 lg:items-start items-center">
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
                        </div> */}
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
                                        {/* ソフトウェアの開発・販売、システムインテグレーションなどを行う企業です。<br />
                                        <br />
                                        金融システム開発部署に所属し、クレジットカードシステム開発に携わっています。<br />
                                        2017/1から顧客のクレジットカードシステム開発に携わっており、<br />
                                        顧客のニアショア開発拠点（自社）にてWebAPI、Batch、社内Webサイトなど、主にサーバーサイド開発を行っています。<br /> */}
                                    </div>
                                    <br />
                                    <hr />
                                    <h3>カード基幹システム開発</h3>
                                    <p className="about-period pl-4">2017年 - 2020年</p><br />

                                    <div className="mb-2">
                                        <li className="about-me-item">債権バッチシステム開発</li>
                                        <div className="about-me-sub">
                                            IFRS（財務国際基準）対応
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">請求バッチシステム開発</li>
                                        <div className="about-me-sub">
                                            請求処理性能改善（処理時間短縮）
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">少額保険システム開発</li>
                                        <div className="about-me-sub">
                                            おすすめ保険リスト取得WebAPI開発<br />
                                            保険登録・削除API開発
                                        </div>
                                    </div>

                                    <h3>Token管理中継サーバー開発</h3>
                                    <p className="about-period pl-4">2021年 - 2022年</p><br />
                                    <div className="mb-2">
                                        <li className="about-me-item">言語・環境</li>
                                        <div className="about-me-sub">
                                            Back-end：JakartaEE, JDK11<br />
                                            Batch : shell, Helidon SE, JDK11<br />
                                            DB：Oracle<br />
                                            Server：RHEL, Kubernetes, payara, Kafka, Kong gateway<br />
                                            CI/CD：Jenkins, JFrog, Harness, Harbor<br />
                                            Performance Test：Apache JMeter<br />
                                            Communication Tool：Microsft Teams, JIRA, Confluence, ZOOM<br />
                                            Version control：Bitbucket
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">カードブランド（VISA, MasterCard）との連携フロー理解</li>
                                        <div className="about-me-sub">
                                            Token発行・更新・削除管理フロー<br />
                                            セキュリティ対策の理解（データ暗号化・複合化、証明書）
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">基本設計・詳細設計</li>
                                        <div className="about-me-sub">
                                            Kafkaを用いて処理分散を考慮した処理フロー設計<br />
                                            非同期処理によるステータス遷移問題を考慮した設計<br />
                                            大量データ処理Batch設計
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">テックリーダー</li>
                                        <div className="about-me-sub">
                                            開発関連知識共有<br />
                                            メンバー教育（JavaEE、Kubernetes、システム構成・フローなど）<br />
                                            コードレビュー担当<br />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">負荷性能試験によるPayara web server、Kubernetes POD チューニング</li>
                                        <li className="about-me-item">Real環境障害発生時の対処手順作成</li>
                                        <div className="about-me-sub">
                                            原因調査手順・原因判断ポイント作成<br />
                                            データリカバリ手順・Tool作成<br />
                                            報告ルート確認と判断基準作成
                                        </div>
                                    </div>
                                    <h3>社内メンテナンス用Webサイト開発</h3>
                                    <p className="about-period pl-4">2023年 - 現在</p><br />
                                    <div className="mb-2">
                                        <li className="about-me-item">言語・環境</li>
                                        <div className="about-me-sub">
                                            Front-end：JSF, CSS, Javascript, XHTML<br />
                                            Back-end：JakartaEE, JDK11<br />
                                            Batch : shell, JakartaEE, JDK11<br />
                                            DB：Oracle<br />
                                            Server：RHEL, Kubernetes, Payara, Apache server(reverse proxy server)<br />
                                            CI/CD：Jenkins, JFrog, Harness, Harbor<br />
                                            Communication Tool：Microsft Teams, JIRA, Confluence, ZOOM<br />
                                            Version control：Bitbucket
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">要件整理・調整</li>
                                        <div className="about-me-sub">
                                            企画部署とコミュニケーションをとり、<br />
                                            実現可能性を考慮した機能を調整・提案することで要件を整理
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">基本設計・詳細設計</li>
                                        <div className="about-me-sub">
                                            新規画面のレイアウトとイベント処理、バックエンドAPI、バッチ設計、テーブル設計など、<br />
                                            一連の処理全般を設計<br />
                                            ユーザビリティーを考慮した画面設計<br />
                                            データ安全性、処理性能など予期せぬリスクを考慮したバックエンドとバッチ設計<br />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">テックリーダー</li>
                                        <div className="about-me-sub">
                                            開発関連知識共有<br />
                                            コードレビュー担当<br />
                                            開発タスク整理と割当て、進捗確認
                                            外国籍チームとのコミュニケーションロース対策検討<br />
                                            各工程の環境準備（DEV、STG、UAT環境など）
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <li className="about-me-item">JSF開発の理解</li>
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