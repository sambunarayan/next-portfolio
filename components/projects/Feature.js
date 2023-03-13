import Image from 'next/image';
import Styles from '@/styles/aboutme.module.css';
import ITBoardImage1 from '/public/images/jeus-blog-it-board-1.png';
import ITBoardNewImage1 from '/public/images/jeus-blog-it-board-new.png';
import ITBoardNewImage2 from '/public/images/jeus-blog-it-board-new2.png';
import postListImage from '/public/images/post-list1.png';
import postImage2 from '/public/images/post2.png';
import postImage3 from '/public/images/post3.png';
import afterPostTimeLineImage from '/public/images/after-post-time-line.png';

export default function Feature({ seqNum, features }) {
    switch (seqNum) {
        case "1":
            return (
                <div className={Styles.itemdiv}>
                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                        <h3>機能</h3>
                        <li>自動Jenkinsビルド（ビルド、デプロイ、Slack通知）</li>
                        <li>サーバーモニタリング</li>
                    </div>
                </div>
            );
        case "2":
            return (
                <div className={Styles.itemdiv}>
                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                        <h3>機能</h3>
                        <div className="project-sub"><b>Time Line</b></div>
                        <div className="flex flex-col ml-3 lg:items-start items-center">
                            <li className="project-sub ">最新の投稿順で初期ページに投稿一覧を表示します。</li>
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
                        <div className="project-sub indent-11 mt-10"><b>[IT board ページ]</b></div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            <Image src={ITBoardImage1}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                                quality="100" />
                            新しい投稿ページを作成したい場合、「+」ボタンを押すことで作成できます。
                        </div>
                        <div className="project-sub indent-11 mt-10"><b>[新しい投稿ボード作成ページ]</b></div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            <Image src={ITBoardNewImage1}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto'
                                }}
                                quality="100" />
                            文字の色やメニューに表示するロゴを選択できます。
                        </div>
                        <div className="project-sub indent-11 mt-10"><b>[新しい投稿ボード作成完了]</b></div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            <Image src={ITBoardNewImage2}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                                quality="100" />
                        </div><br />
                        <div className="project-sub text-left">
                            <b>投稿機能</b><br />
                            ページから新しい投稿を記載することができます。<br />
                            日本語での投稿が可能で、イメージを添付することもできます。<br />
                            ただし、イメージのプレビューや編集機能がないため今後文字スタイルやイメージの編集機能を実装することが目標です。<br />
                        </div>
                        <div className="project-sub indent-11 mt-10"><b>[投稿一覧イメージ]</b></div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            <Image src={postListImage}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                                quality="100" />
                        </div><br />
                        <div className="project-sub indent-11 mt-10"><b>[投稿作成イメージ]</b></div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            <Image src={postImage2}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                                quality="100" />
                        </div><br />
                        <div className="project-sub indent-11 mt-10">
                            <b>[投稿作成イメージ]</b><br />
                        </div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            投稿されたイメージは以下のように表示されます。
                            <Image src={postImage3}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                                quality="100" />
                        </div><br />
                        <div className="project-sub indent-11 mt-10">
                            <b>[投稿後のTimeLineイメージ]</b>
                        </div>
                        <div className="mx-auto flex items-center justify-center flex-col">
                            投稿後、TimeLineに最新投稿として表示されます。
                            <Image src={afterPostTimeLineImage}
                                className="border-2"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                                quality="100" />
                        </div><br />
                    </div>
                </div>
            )
        case "3":
            return (
                <div className={Styles.itemdiv}>
                    <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                        <h3>機能</h3>
                        <li><b>黒画面機能</b></li>
                        <div className="project-sub indent-7">
                            ページの右上にある太陽ボタンでホワイト画面とブラック画面の切り替えができます。
                        </div>
                    </div>
                </div>
            );
        default:
            return (<></>);
    }
}