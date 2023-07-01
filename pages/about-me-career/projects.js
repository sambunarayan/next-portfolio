import Layout from '@/components/layout';

export default function CareerProjects() {
    return <Layout>
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">カード基幹システム開発</span>
                            <span class="mt-1 text-gray-500 text-sm">2017年 - 2020年</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">カード基幹システム開発</h2>
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
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">Token管理中継サーバー開発</span>
                            <span class="mt-1 text-gray-500 text-sm">2021年 - 2022年</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                            <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}