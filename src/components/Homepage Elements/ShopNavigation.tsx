import ImageSW from '../../assets/SWATCH.png'
const specialChar = '>'
import {Link} from "react-router-dom";

function ShopNavigation() {

    return (
        <div className=' bg-white w-screen mb-16 grid grid-cols-2'>

            <div className='ml-auto mt-20 col-span-1'>
                <h2 className='font-bold text-4xl'>Shop now for less</h2>
                <p className='font-light mt-4'>
                    There are only a few smartwatches that worth your money. Find the one <br/> that's just for you right here.
                </p>
                <button className='mt-4 bg-blue-500 rounded-full px-2 p-1 text-white border border-white shadow'>
                    <Link to='/shop'>VIEW PRODUCTS {specialChar}</Link>
                </button>
            </div>
            <div className='col-span-1'>
                <img src={ImageSW}/>
            </div>
        </div>
    )
}

export default ShopNavigation;