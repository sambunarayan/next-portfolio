import Image from 'next/image';

export default function SkillProgress({ area, skill }) {
    if (skill.properties.Category.select.name !== area) {
        return;
    }
    return (
        <>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="inline-flex">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
                            <Image
                                src={skill.properties.Image.files[0].file.url}
                                width="100"
                                height="60"
                                layout="responsive"
                                objectFit="contain"
                                alt={"image"}></Image>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-4 mt-1">{skill.properties.Name.title[0].plain_text}</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        <small>趣味</small><small>勉強</small><small>仕事で使っている</small>
                    </div>
                    <div className="grid grid-cols-9 gap-1">
                        {rendering(skill.properties.Level.multi_select[0].name)}
                    </div>
                </div>
            </div>
        </>
    );
}

const rendering = (level) => {
    let numLevel = parseInt(level);
    const result = [];
    for (let i = 1; i <= numLevel; i++) {
        result.push(<span className={"skill-level-fill-" + i} />);
    }
    let i = numLevel + 1;
    while (i++ <= 9) {
        result.push(<span className="skill-level-empty" />);
    }
    return result;
};