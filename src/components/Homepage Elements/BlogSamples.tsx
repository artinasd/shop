import {tempBlog} from "../tempData.ts";
import BlogItem from "./BlogItem.tsx";

function BlogSamples() {

    return (
        <>
            <h2 className='mr-auto ml-60 mb-8 text-3xl font-bold'>LATEST NEWS</h2>
            <ul className='grid grid-cols-4 gap-4 mx-60 mb-16'>
                {tempBlog.map((item, index) => (
                    <li key={index}>
                        <BlogItem date={item.date} title={item.title} text={item.preview}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BlogSamples;