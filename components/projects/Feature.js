import Image from 'next/image';
import Styles from '@/styles/aboutme.module.css';

export default function Feature({ features }) {
    console.log(features);
    if (features.length !== 0) {
        return (
            <div className={Styles.itemdiv}>
                <div className="flex flex-col mb-2 lg:items-start items-center">
                    <h3>機能</h3>
                    {features.map((f) => (
                        <li key={f.id}>{f.name}</li>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}