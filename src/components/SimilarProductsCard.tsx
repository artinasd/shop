interface propTypes {
    image: string
    title: string
    price: number
    id: number
}

function SimilarProductsCard({image, title, price}: propTypes) {

    return (
        <div className='flex flex-col bg-gray-50 rounded-xl w-48 p-2 space-y-4 hover:bg-gray-100 transition'>
            <img className='rounded-xl' src={image} />
            <h2 className='text-center whitespace-nowrap overflow-hidden text-ellipsis inline-block text-sm font-bold'>{title}</h2>
            <p className='text-sm font-light text-center'>${price}</p>
        </div>
    )
}

export default SimilarProductsCard;