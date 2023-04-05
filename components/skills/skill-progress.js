import Image from 'next/image';

export default function SkillProgress({ area, skill }) {
    if (skill.properties.Category.select.name !== area) {
        return;
    }
    var img;
    if (skill.properties.Image.files.length > 0) {
        img = 
        <div className="dark:rounded-full dark:bg-indigo-50 pb-2 pt-2">
        <Image
            
            src={skill.properties.Image.files[0].file.url}
            width={100}
            height={60}
            layout="responsive"
            objectFit="contain"
            alt={"image"}></Image></div>;
    } else {
        img = <svg className="dark:rounded-full dark:bg-indigo-50" width="100" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.3333V21H13L19 15V14H14.3333C13.2334 14 12.6834 14 12.3417 14.3417C12 14.6834 12 15.2334 12 16.3333Z" fill="#2A4157" fillOpacity="0.24" />
            <path d="M12.1716 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V14.1716C19 14.5803 19 14.7847 18.9239 14.9685C18.8478 15.1522 18.7032 15.2968 18.4142 15.5858L13.5858 20.4142C13.2968 20.7032 13.1522 20.8478 12.9685 20.9239C12.7847 21 12.5803 21 12.1716 21Z" stroke="#222222" strokeWidth="1.2" />
            <path d="M12 21V16.3333C12 15.2334 12 14.6834 12.3417 14.3417C12.6834 14 13.2334 14 14.3333 14H19" stroke="#222222" strokeWidth="1.2" />
        </svg>
    }
    return (
        <>
            <div className="xl:w-1/3 md:w-1/2 p-1">
                <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="inline-flex">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
                            {img}
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-4 mt-1">{skill.properties.Name.title[0].plain_text}</h2>
                    </div>
                    {description(skill.properties.Description)}
                    {levelDiv(skill.properties.Level)}
                </div>
            </div>
        </>
    );
}

const description = (description) => {
    if (description === null || description.rich_text.length === 0) {
        return;
    }
    return (
        <>
            <p className="leading-relaxed text-left dark:text-white">
                {description.rich_text[0].plain_text}
            </p>
        </>
    );
}

const levelDiv = (level) => {
    if (level === null || level.multi_select.length === 0) {
        return;
    }
    return (
        <>
            <div className="grid grid-cols-3">
                <small>趣味</small><small>頑張ってます！</small><small>得意！</small>
            </div>
            <div className="grid grid-cols-9 gap-1">
                {levelGage(level.multi_select[0].name)}
            </div>
        </>
    );
};

const levelGage = (level) => {
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