const specialChar = '>'

interface propTypes {
    date: string
    title: string
    text: string
}

function BlogItem({date, title, text}: propTypes) {

    return (
        <div className='col-span-1 bg-white p-6'>
            <p className='mb-3 text-xs text-gray-500'>{date}</p>
            <h2 className='mb-3 text-sm font-bold'>{title}</h2>
            <p className='mb-3 font-light text-gray-500 text-sm'>{text}</p>

            <button className='text-blue-500 font-bold text-sm'>LEARN MORE {specialChar}</button>
        </div>
    )
}

export default BlogItem