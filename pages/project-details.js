import {useRouter} from "next/router";

export default function ProjectDetail() {
    // const title = Router.properties.名前.title[0].plain_text
    const router = useRouter();
    console.log(">>>"+router.query.title);
    return (
        <>
            {/* {title} */}
        </>
    );
}