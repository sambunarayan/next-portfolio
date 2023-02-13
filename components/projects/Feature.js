import Image from 'next/image';
import Styles from '@/styles/aboutme.module.css';

export default function Feature({ seqNum, features }) {
    // console.log(features);
    switch (seqNum) {
        case "1":
            return (
                <div className={Styles.itemdiv}>
                    <div className="flex flex-col mb-2 lg:items-start items-center">
                        <h3>機能</h3>
                        <li>自動Jenkinsビルド（ビルド、デプロイ、Slack通知）</li>
                        <li>サーバーモニタリング</li>
                    </div>
                </div>
            );
        case "2":
            return (
                <div className={Styles.itemdiv}>
                    <div className="flex flex-col mb-2 lg:items-start items-center">
                        <h3>機能</h3>
                        <div className="project-sub"><b>Time Line</b></div>
                        <div className="flex flex-col ml-3 lg:items-start items-center">
                            <li className="project-sub">最新の投稿順で初期ページに投稿一覧を表示します。</li>
                            <div className="project-sub text-left">
                                ページのロード速度を考慮し、Ajaxを利用して非同期で投稿一覧を取得します。<br />
                                一回のリクエストに最新投稿10件を取得します。<br />
                                スクロールしてページの最下段に移動した際に次の10件を取得するようにページング機能を実現しました。<br />
                            </div>
                            <li className="project-sub">投稿クリックすると投稿ページに移動され、詳細内容が表示ます。</li>
                        </div><br />
                        <div className="project-sub text-left">
                            <b>カテゴリ別section作成機能</b><br />
                            言語やアプリケーションなどカテゴリ毎に投稿をまとめられるようにsection作成機能を設けました。
                        </div>

                    </div>
                </div>
            )
        default:
            return (<></>);
    }
}