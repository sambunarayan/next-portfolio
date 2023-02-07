import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPreview({ data }) {
    const title = data.properties.名前.title[0].plain_text
    const start_date = data.properties.WorkPeriod.date.start
    const end_date = data.properties.WorkPeriod.date.end
    const detail_text = data.properties.Description.rich_text[0].plain_text
    const imageSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.タグ.multi_select;
    const github = data.properties.Github.url;
    const purpose = data.properties.Purpose.multi_select;
    const system_structure = data.properties.StructureImage;
    const structureExplain = data.properties.StructureExplain.multi_select;
    const features = data.properties.Features;

    const query = {
        title: title,
        start_date: start_date,
        end_date: end_date,
        detail_text: detail_text,
        imageSrc: imageSrc,
        tags: tags,
        github: github,
        purpose: purpose,
        system_structure: system_structure,
        structureExplain: structureExplain,
        features: features
    };
    return (
        <Link href={{ pathname: "../../project-details", query: {post: JSON.stringify(query)} }} as="project-details" legacyBehavior>
            <div className="project-card p-5 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                    <Image
                        src={imageSrc}
                        width="100"
                        height="60"
                        layout="responsive"
                        objectFit="contain"
                        alt={"image"}
                    />
                </div>
                <h2 className="text-2xl font-medium title-font text-gray-900 mt-5 font-bold">{title}</h2>
                <p className="text-base leading-relaxed mt-0">{start_date} ~ {end_date}</p>
                <p className="text-base leading-relaxed mt-4 text-xl">{detail_text}</p>
                <div className="flex flex-wrap items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 m-1" key={aTag.id}>#{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </Link>
    );
}

