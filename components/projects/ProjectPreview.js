import Image from 'next/image';

export default function ProjectPreview({ data }) {
    const title = data.properties.名前.title[0].plain_text
    const start_date = data.properties.WorkPeriod.date.start
    const end_date = data.properties.WorkPeriod.date.end
    const detail_text = data.properties.Description.rich_text[0].plain_text
    const imageSrc = data.cover.file?.url || data.cover.external.url

    return (
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <Image 
                    src={imageSrc}
                    width="100"
                    height="60"
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
            <p className="text-base leading-relaxed mt-0">{start_date} - {end_date}</p>
            <p className="text-base leading-relaxed mt-2">{detail_text}</p>
            <a className="text-blue-500 dark:text-blue-400 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    );
}