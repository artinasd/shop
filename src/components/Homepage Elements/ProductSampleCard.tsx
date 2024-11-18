import {useNavigate} from "react-router-dom";
import {CartActions} from "../../data/CartSlice.ts";
import {useDispatch} from "react-redux";

interface propTypes {
    title: string;
    price: number;
    image: string;
    id: number
}

function ProductSampleCard({id, title, price, image}: propTypes) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className='w-fit h-fit bg-white col-span-1 flex flex-col items-center shadow-lg border border-white
                    border-4 hover:shadow-none hover:border-gray-100 hover:rounded transform transition duration-300'>

            <button>
                <img onClick={() => navigate(`/shop/products/${id}`)} className='max-w-52 max-h-52' src={image}/>
            </button>

            <div className='mt-6 flex flex-col items-center font-bold'>
                <div className='w-52 flex flex-col items-center font-bold px-3'>
                    <button onClick={() => navigate(`/shop/products/${id}`)}>
                        <h3 style={{width: '170px', textAlign: 'center'}} className='text-sm whitespace-nowrap
                                                                         overflow-hidden text-ellipsis inline-block'>
                            {title}
                        </h3>
                    </button>
                </div>
                <p className='text-gray-400 text-sm mt-2'>$ {price}.00</p>

                <button
                    onClick={() => dispatch(CartActions.addToCart({id, title, image, price}))}
                    className='shadow-sm my-6 rounded-full px-4 border border-gray-400 p-1 text-gray-400 text-xs
                                                           hover:border-black hover:text-black transform transition'>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default ProductSampleCard;