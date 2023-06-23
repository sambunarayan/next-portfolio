import Link from 'next/link';
import Styles from '@/styles/aboutme.module.css';

export default function GitUrl({ gitUrl }) {
    if (gitUrl) {
        return (<></>);
    }
    
    return (
        <div className={Styles.itemdiv}>
            <div className="flex flex-col mb-2 lg:items-start items-center">
                <h3>Github url</h3>
                <div className={Styles.sub}>
                    <Link href={gitUrl} legacyBehavior>
                        <a target="_blank">{gitUrl}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}