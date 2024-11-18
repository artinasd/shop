import cartLogo from '../assets/cart.png'
import fullStar from '../assets/fullStar.png'
import halfStar from '../assets/halfStar.png'
import {useNavigate} from "react-router-dom";
import {CartActions} from "../data/CartSlice.ts";
import {useDispatch} from "react-redux";

interface propTypes {
    title: string,
    price: number,
    image: string,
    id: number
}

function ShopProductCard({id, title, price, image}: propTypes) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleAddToCart() {
        dispatch(CartActions.addToCart({id, title, price, image}))
    }

    return (
        <div className='col-span-1 bg-white rounded drop-shadow w-fit h-fit flex flex-col items-center p-3 hover:drop-shadow-lg transition duration-50 hover:scale-105'>
            <button onClick={() => navigate(`/shop/products/${id}`)}>
                <img className='w-64 h-52 mb-10' src={image} alt='NaN'/>
                <h2 style={{width: '200px', textAlign: 'center'}}
                    className='whitespace-nowrap overflow-hidden text-ellipsis inline-block'>{title}</h2>
            </button>

            <div className='flex flex-row items-center'>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={halfStar}/>
            </div>

            <p>${price}.00</p>

            <button onClick={handleAddToCart} className='bg-gray-200 rounded-lg p-3 px-4 hover:bg-gray-300 transition duration-50'>
                <div className='flex flex-row items-center gap-4'>
                    <img className='w-5 h-5' src={cartLogo}/>
                    Add to Cart
                </div>
            </button>
        </div>
    )
}

export default ShopProductCard;