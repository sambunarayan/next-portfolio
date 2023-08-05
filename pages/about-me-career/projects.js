import Layout from '@/components/layout';

export default function CareerProjects() {
    return <Layout>
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">外部サービス向けのWebAPI開発</span>
                            <span class="mt-1 text-gray-500 text-sm">2023年7月 - 現在</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">外部サービス向けのWebAPI開発</h2>
                            <p class="leading-relaxed">説明</p>
                            <br />
                            <p class="leading-relaxed">
                                役割など記載
                                <br />
                            </p>
                            <br />
                            <div className="mb-2">
                                <li className="about-me-item">言語・環境</li>
                                <div className="about-me-sub">
                                    API：JakartaEE, JDK17, Helidon SE<br />
                                    Batch：JDK11, Helidon SE, shell
                                    DB：Oracle<br />
                                    Server：Netty server(Helidon内蔵), Kubernetes<br />
                                    CI/CD：Jenkins, JFrog, Harness, Harbor<br />
                                    Communication Tool：Microsft Teams, JIRA, Confluence, ZOOM<br />
                                    Version control：Bitbucket
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">社内メンテナンスページ開発</span>
                            <span class="mt-1 text-gray-500 text-sm">2023年1月 - 2023年6月</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">社内メンテナンスページ開発</h2>
                            <p class="leading-relaxed">会員管理用のため新規メンテナンスページや夜間バッチシステムを開発</p>
                            <br />
                            <p class="leading-relaxed">
                                小規模の社内システムではありますが、フロントからバックエンド、バッチ処理まで一連の流れを設計・開発・テストを主導した初めてのプロジェクトでした。<br />
                                特に開発工程は、多国籍のメンバーをリードして開発を行ったため、<br />
                                コミュニケーションロスや認識齟齬などテクニカル的な部分以外のリスクにも考慮しながらプロジェクトを進めていきましたので、<br />
                                いろいろ学ぶことができました。<br />
                            </p>
                            <br />
                            <div className="mb-2">
                                <li className="about-me-item">言語・環境</li>
                                <div className="about-me-sub">
                                    Front-end：JSF, CSS, Javascript, JakartaEE, JDK11<br />
                                    Back-end：JakartaEE, JDK11<br />
                                    Batch : shell, Helidon SE, JDK11<br />
                                    DB：Oracle<br />
                                    Server：Kubernetes, payara, Apache web server(reverse proxy)<br />
                                    CI/CD：Jenkins, JFrog, Harness, Harbor<br />
                                    Communication Tool：Microsft Teams, JIRA, Confluence, ZOOM<br />
                                    Version control：Bitbucket
                                </div>
                            </div>
                            <div className="mb-2">
                                <li className="about-me-item">テックリーダー</li>
                                <div className="about-me-sub">
                                    開発に必要な他部署との調整<br />
                                    コードレビュー、チームメンバーの進捗確認・タスク管理<br />
                                    多国籍メンバーとのコミュニケーションロス対策を講じました。<br />
                                </div>
                            </div>
                            <div className="mb-2">
                                <li className="about-me-item">基本設計・詳細設計</li>
                                <div className="about-me-sub">
                                    企画部署とコミュニケーションをとりながら、実現可能な部分とできない部分を切り分けて要件を整理することができました。<br />
                                    リアルタイムアクセスに備えた大量データ登録バッチの設計やDB設計を行いました。
                                </div>
                            </div>
                            <div className="mb-2">
                                <li className="about-me-item">開発・リリース</li>
                                <div className="about-me-sub">
                                    JSFを使用してWebPageを作成しました。<br /> 
                                    フレームワークはJavaeeを使用し、Web application serverはPayara、reverse proxy serverはApacheを利用して開発を行いました。<br />
                                    <br/>
                                    また、サーバー間のデータ転送のため、SFTP転送を行うをshellを実装し、夜間バッチで定期的に稼働されるようにしました。<br/>
                                    大量データ（2千万件）のデータをDBに入れ替える必要があり、処理速度やサーバー負荷を一定の基準値を満たすように要求されました。<br/>
                                    結果、OracleのSQL Loaderの機能を利用することと、データをパーティションすることで要求を満たすことができました。<br/>
                                    <br/>
                                    特に旧データと登録したデータの切り替えるタイミングにアクセスのあった場合、データ整合性などの問題がありましたが、<br/>
                                    もう一つのテーブルを用意し、最新のパーティション情報（カーソル）を管理するように実装しました。<br/>
                                    カーソル（１カラム）を更新することで一瞬で切り替えられるように実現できました。<br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">モバイルNFC開発</span>
                            <span class="mt-1 text-gray-500 text-sm">2021年 - 2022年</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Token管理中継サーバー開発</h2>
                            <p class="leading-relaxed">モバイルタッチ決済時に使用される各カードブランド社（VISA、Mastercardなど）のTokenを管理・中継するサーバーを開発  </p>
                            <br />
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
                                <li className="about-me-item">テックリーダー</li>
                                <div className="about-me-sub">
                                    コードレビュー、チームメンバーフォロー<br />
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
                        </div>
                    </div>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">債権管理チーム</span>
                            <span class="mt-1 text-gray-500 text-sm">2017年 - 2020年</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">カード基幹システム開発</h2>
                            <p class="leading-relaxed">債権業務に関わるシステムを開発</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}