import cartLogo from '../assets/cart.png'
import fullStar from '../assets/fullStar.png'
import halfStar from '../assets/halfStar.png'

interface propTypes {
    title: string,
    price: number,
    image: string,
}

function ShopProductCard({title, price, image}: propTypes) {

    return (
        <div className='col-span-1 bg-white rounded drop-shadow w-fit h-fit flex flex-col items-center p-3 hover:drop-shadow-lg transition duration-50'>
            <img className='w-64 h-52 mb-10' src={image}/>
            <h2>{title}</h2>

            <div className='flex flex-row items-center'>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={fullStar}/>
                <img className='h-5 w-5' src={halfStar}/>
            </div>

            <p>${price}.00</p>

            <button className='bg-gray-200 rounded-lg p-3 px-4 hover:bg-gray-300 transition duration-50'>
                <div className='flex flex-row items-center gap-4'>
                    <img className='w-5 h-5' src={cartLogo}/>
                    Add to Cart
                </div>
            </button>
        </div>
    )
}

export default ShopProductCard;