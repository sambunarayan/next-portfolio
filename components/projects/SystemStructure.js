import Image from 'next/image';
import Styles from '@/styles/aboutme.module.css';

export default function SystemStructure({ files, explains }) {
    if (files.length) {
        return (
            <div className={Styles.itemdiv}>
                <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                    <h3>System Structure</h3>
                    {files.map((ss) => (
                        <div className="rounded-lg h-70 overflow-hidden mb-1">
                            <Image
                                src={ss.file.url}
                                width={400}
                                height={200}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                quality="100"
                            />
                        </div>
                    ))}
                    {explains.map((ex) => (
                        <li className="project-sub" key={ex.id}>{ex.name}</li>
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