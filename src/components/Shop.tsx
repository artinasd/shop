import ShopProductCard from "./ShopProductCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../data/shopSlice.ts";
import {Product} from "../data/shopSlice.ts";

function Shop() {
    const reduxStore = useSelector((state: RootState) => state.shop)

    return (
        <div>
            <ul className='grid grid-cols-5 gap-3 my-16 mx-16'>
                {reduxStore.map((item: Product, index: number) => (
                    <li key={index}>
                        <ShopProductCard image={item.image} price={item.price} title={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Shop