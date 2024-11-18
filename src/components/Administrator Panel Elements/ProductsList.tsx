import {useSelector} from "react-redux";
import {RootState} from "../../data/shopSlice.ts";
import {Product} from "../../data/shopSlice.ts";
import AdminProducts from "./AdminProducts.tsx";

function ProductsList() {
    const reduxStore = useSelector((state: RootState) => state.shop)

    return (
        <div className='bg-white my-16 mr-16 ml-52 rounded-lg'>
            <div className='p-5'>
                <h2 className='font-bold'>All Products</h2>
            </div>
            <hr className='border border-gray-100'/>

            <div className='grid grid-cols-6 gap-10 py-1.5 px-4 text-gray-400 text-sm pl-5 '>
                <h3 className='col-span-2'>Product Name</h3>
                <h3 className='col-span-1 pl-1'>Category</h3>
                <h3 className='col-span-1 pl-2'>Price</h3>
                <h3 className='col-span-1 pl-2'>Status</h3>
                <h3 className='col-span-1 pl-3'>Action</h3>
            </div>

            <hr className='border border-gray-100 w-full'/>
            <ul className='text-sm'>
                {reduxStore.slice().reverse().map((item: Product, index: number) => (
                    <li key={index}>
                        <AdminProducts id={item.id} status={item.status} price={item.price} category={item.category} img={item.image}
                                       title={item.title}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsList;