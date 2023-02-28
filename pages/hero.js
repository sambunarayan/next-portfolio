import IndexAni from './index-animate';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Jaewoo's portfolio
                    <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-8 leading-relaxed">
                    サーバーサイドエンジニアになりたいSIerです。
                    エンジニアとして毎日成長を目指して１日１コミットを実施中です。
                    </p>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="btn-project">Projectへ</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <IndexAni />
            </div>
        </>
    );
}