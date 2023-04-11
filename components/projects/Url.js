import Link from 'next/link';
import Styles from '@/styles/aboutme.module.css';

export default function Url({ webPageUrl }) {
    console.log(webPageUrl);
    if (webPageUrl === undefined || webPageUrl === null) {
        return (<></>);
    }
    return (
        <div className={Styles.itemdiv}>
            <div className="flex flex-col mb-2 lg:items-start items-center">
                <h3>Web page URL</h3>
                <div className={Styles.sub}>
                    <Link href={webPageUrl} legacyBehavior>
                        <a target="_blank">{webPageUrl}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}