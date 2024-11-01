interface propTypes {
    title: string;
    price: number;
    image: string;
}

function ProductSampleCard({title, price, image}: propTypes) {

    return (
        <div className='w-fit h-fit bg-white col-span-1 flex flex-col items-center shadow-lg hover:shadow transform transition'>
            <img className='max-w-52 max-h-52' src={image}/>

            <div className='mt-6 flex flex-col items-center font-bold'>
                <div className='w-52 flex flex-col items-center font-bold px-3'>
                    <h3>{title}</h3>
                </div>
                <p className='text-gray-400 text-sm mt-2'>$ {price}.00</p>

                <button className='shadow-sm my-6 rounded-full px-4 border border-gray-400 p-1 text-gray-400 text-xs
                                                            hover:border-black hover:text-black transform transition'>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default ProductSampleCard;