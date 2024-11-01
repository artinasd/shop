import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../data/shopSlice.ts";

function ProductReview() {
    const {productId} = useParams();
    const reduxState = useSelector((state: RootState) => state.shop)

    const addedProduct = reduxState.find((eachObject: any) => eachObject.id === Number(productId));
    console.log(addedProduct);

    return (
        <div className='rounded-lg w-fit p-10 flex flex-col items-center mx-auto m-16 border border-gray-50 space-y-6 shadow-lg'>
            <h2 className='text-2xl mr-auto font-bold mb-2'>Review</h2>

            {addedProduct ?
                <>
                    <h2>{addedProduct.title}</h2>
                    <h2>${addedProduct.price}.00</h2>
                    <img src={addedProduct.image} />
                </>     :

                <p>Error</p>
            }

        </div>
    )
}

export default ProductReview