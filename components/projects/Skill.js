import Styles from '@/styles/aboutme.module.css';

export default function Skill({ tags }) {
    if (!tags || !tags.length) {
        return <></>
    }
    return (
        <div className={Styles.itemdiv}>
            <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                <h3>Skill</h3>
                <div className={Styles.sub}>
                    <div className="flex flex-wrap items-start mt-2 ">
                        {tags.map((aTag) => (
                            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 m-1" key={aTag.id}>
                                {aTag.name}
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}