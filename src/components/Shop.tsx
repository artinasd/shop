import ShopProductCard from "./ShopProductCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../data/shopSlice.ts";
import {Product} from "../data/shopSlice.ts";

function Shop() {
    const reduxStore = useSelector((state: RootState) => state.shop)

    return (
        <div className='bg-gray-50'>
            <ul className='grid grid-cols-5 gap-5 py-16 mx-16'>
                {reduxStore.slice().reverse().map((item: Product, index: number) => (
                    <li key={index}>
                        <ShopProductCard id={item.id} image={item.image} price={item.price} title={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Shop