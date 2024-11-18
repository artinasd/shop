import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../data/shopSlice.ts";
import {shopActions} from "../../data/shopSlice.ts";
import {useDispatch} from "react-redux";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

function ProductEdition() {
    const {productId} = useParams()
    const reduxState = useSelector((state: RootState) => state.shop)
    const selectedProduct = reduxState.find((eachProduct: any) => eachProduct.id === Number(productId))
    const dispatch = useDispatch()
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    function handleChangeSubmit() {
        const id = Number(productId)
        const title = titleRef.current?.value;
        const price = priceRef.current?.value;
        const description = descriptionRef.current?.value

        dispatch(shopActions.changeProduct({id, title, price, description}))
        navigate(`/shop/products/${id}`)
    }

    return (
        <div className='grid grid-cols-3 p-20 gap-10 bg-gray-50 text-gray-600'>

            <div className='col-span-1 space-y-5 bg-white rounded-xl p-16 flex flex-col items-center space-y-10 drop-shadow-lg'>
                <input ref={titleRef} defaultValue={selectedProduct?.title} style={{width: '300px'}} className='text-3xl p-2 border rounded placeholder:text-lg' />
                <img src={selectedProduct?.image} />
                <p>Price: $ <input ref={priceRef} style={{width: '50px', textAlign: 'center'}} className='border p-1 rounded' defaultValue={String(selectedProduct?.price)} /></p>
                <button onClick={handleChangeSubmit} className='bg-blue-500 rounded-lg text-white px-16 py-3 font-bold hover:drop-shadow-xl transition hover:bg-blue-700'>Save Changes</button>
            </div>

            <div className='bg-white rounded-xl p-16 col-span-2 drop-shadow-lg'>
                <textarea ref={descriptionRef} style={{width: '660px', height: '400px'}} className='border rounded p-2' defaultValue={selectedProduct?.description} />
            </div>

        </div>
    )
}

export default ProductEdition