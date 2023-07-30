import IndexAni from './index-animate';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Jaewoo's portfolio
                    <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-4  leading-relaxed">
                    何かを学ぶことが大好きなエンジニアです。<br />
                    課題を解決して知識が深まることが好きです。<br />
                </p>
                <p className="mb-4 leading-relaxed">
                    主にWeb server・Batch serverなどのServer APIを開発するサーバーサイドエンジニアです。<br />
                    一番得意な言語はJavaで普段Kubernetesやpayaraなどを使って開発しています。
                </p>
                <p className="mb-8 leading-relaxed">
                    最近、Next.jsにハマりNext.jsを使ってウェブサイトを開発することを楽しんでいます。<br />
                    Next.jsやSpring, AWSなどを用いて自分のサービスを展開することが目標です。
                </p>
                <p className="mb-8 leading-relaxed">
                    変化のスピードが速いこの時代に自分のスキールもスピードに合わせて成長し続け、<br />
                    時代に遅れないエンジニアになりたいと思います。
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="btn-project btn-black">Projectへ</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <IndexAni />
            </div>
        </>
    );
}