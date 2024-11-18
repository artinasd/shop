import {useSelector} from "react-redux";
import {RootState} from "../data/shopSlice.ts";
import {useParams} from "react-router-dom";
import SimilarProductsCard from "./SimilarProductsCard.tsx";
import {useNavigate} from "react-router-dom";

function ProductView() {
    const reduxStore = useSelector((state: RootState) => state.shop)
    const {productId} = useParams()
    const selectedProduct = reduxStore.find((eachProduct: any) => eachProduct.id === Number(productId))
    const similarProducts = reduxStore.filter((eachProduct: any) => eachProduct.category === selectedProduct?.category)
    const navigate = useNavigate()

    return (
        <div className='bg-gray-50'>
            {selectedProduct ?
                <div className='grid grid-cols-3 p-20 gap-10'>

                    <div className='col-span-1 space-y-5 bg-white rounded-xl p-16 flex flex-col items-center space-y-10 drop-shadow-lg h-fit'>
                        <h2 style={{width: '300px'}} className='text-3xl'>{selectedProduct.title}</h2>
                        <img className='rounded-xl hover:scale-110 transition' src={selectedProduct.image} />
                        <p className='text-xl'>Best Price: ${selectedProduct.price}.00</p>
                        <button className='bg-blue-500 rounded-lg text-white px-16 py-3 font-bold hover:drop-shadow-xl
                                                                                        transition hover:bg-blue-700'>
                            Purchase Now
                        </button>
                    </div>

                    <div className='col-span-2 drop-shadow-lg'>
                        <div className='h-fit bg-white p-16 rounded-xl'>
                            <p className='whitespace-pre-line'>{selectedProduct.description}</p>
                        </div>

                        <div className='bg-white rounded-xl p-8 mt-10'>

                            <div className='scroll-wrapper overflow-hidden'>
                                <ul className='flex overflow-x-scroll pb-4 -mx-4 px-4'>
                                    {similarProducts.map((each: any, index: number) => (
                                        <li onClick={() => navigate(`/shop/products/${each.id}`)} className='hover:scale-95 transition col-span-1 flex-shrink-0' key={index}
                                            style={{minWidth: '250px'}}>
                                            <SimilarProductsCard id={each.id} price={each.price} title={each.title}
                                                                 image={each.image}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                : <p>Error</p>}
        </div>
    )
}

export default ProductView;