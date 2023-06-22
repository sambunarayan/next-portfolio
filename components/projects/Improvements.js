import Styles from '@/styles/aboutme.module.css';

export default function Improvements({ improvements }) {
    if (improvements.length) {
        return (
            <div className={Styles.itemdiv}>
                <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                    <h3>改善点 / 今後の目標</h3>
                    {improvements.map((pp) => (
                        <li className="project-sub text-left" key={pp.id}>{pp.name}</li>
                    ))}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}