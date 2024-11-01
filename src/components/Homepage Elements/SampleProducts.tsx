import ProductSampleCard from "./ProductSampleCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../data/shopSlice.ts";

function SampleProducts() {
    const reduxState = useSelector((state: RootState) => state.shop);

    const sampleProducts = reduxState.slice(-8)

    return (
        <ul className='grid grid-cols-4 gap-6 my-16'>
            {sampleProducts.map((item, index) => (
                <li key={index}>
                    <ProductSampleCard title={item.title} image={item.image} price={item.price} />
                </li>
            ))}
        </ul>
    )
}

export default SampleProducts