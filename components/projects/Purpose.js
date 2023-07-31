import Styles from '@/styles/aboutme.module.css';

export default function Purpose({ purp }) {
    if (!purp || !purp.length) {
        return<></>
    }
    return (
        <div className={Styles.itemdiv}>
            <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                <h3>目的</h3>
                {purp.map((pp) => (
                    <li className="project-sub" key={pp.id}>{pp.name}</li>
                ))}
            </div>
        </div>
    )
}