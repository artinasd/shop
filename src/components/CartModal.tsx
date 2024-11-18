import {forwardRef, MutableRefObject} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../data/CartSlice.ts";
import {useNavigate} from "react-router-dom";
import shoppingBag from '../assets/bag.png'
import {useDispatch} from "react-redux";
import {CartActions} from "../data/CartSlice.ts";

const CartModal = forwardRef<HTMLDialogElement>((_, ref) => {
    const CartStore = useSelector((state: RootState) => state.cart)
    // console.log(CartStore)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <dialog className='rounded h-[500px]' ref={ref as MutableRefObject<HTMLDialogElement | null>}>
            {CartStore.length !== 0 ?
                <>
                    <div className='bg-white px-16 pt-16'>
                        <hr className='w-[702px] border border-gray-100 mb-6 ml-4'/>
                        <ul className='max-h-[300px] overflow-y-auto px-4 pb-4'>
                            {CartStore.map((each: any, index: number) =>
                                <li key={index}>
                                    <div>
                                        <div>
                                            <button onClick={() => {
                                                (ref as MutableRefObject<HTMLDialogElement | null>).current?.close()
                                                navigate(`/shop/products/${each.id}`)
                                            }} className='flex flex-row items-center grid grid-cols-3 h-10 m-1'>
                                                <div className='flex items-center col-span-1 hover:scale-105 transition duration-200'>
                                                    <img className='h-10' src={each.image}/>
                                                    <p className='whitespace-nowrap overflow-hidden text-ellipsis inline-block w-48'>{each.title}</p>
                                                </div>

                                                <p className='col-span-1'>${each.price * each.quantity}.00</p>

                                                <div className='col-span-1 ml-auto flex flex-row justify-center font-black text-lg'>
                                                    <p onClick={
                                                        (event) => {event.stopPropagation()
                                                            dispatch(CartActions.removeFromCart({id: each.id}))
                                                        }}>
                                                        -
                                                    </p>

                                                    <p className='mx-4 font-normal text-base mt-[3px]'>x{each.quantity}</p>

                                                    <p
                                                        onClick={(event) => {
                                                            event.stopPropagation()
                                                            dispatch(CartActions.addToCart({id: each.id, title: each.title, price: each.price, image: each.image}))

                                                        }}>
                                                        +
                                                    </p>
                                                </div>
                                            </button>
                                        </div>
                                        <hr className='border border-1 border-gray-100 my-6'/>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className='space-x-2 flex flex-row justify-center mt-12 mb-4'>
                        <button
                            onClick={() => {
                                (ref as MutableRefObject<HTMLDialogElement | null>).current?.close()
                            }}
                            className='border border-gray-500 rounded-lg bg-white text-gray-600 p-2 hover:drop-shadow transition'>Continue
                            Shopping
                        </button>
                        <button className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-400 transition'>Complete
                            Purchase
                        </button>
                    </div>
                </>
                :
                <div className='p-10 flex flex-col items-center space-y-10 mt-40'>
                    <p>Nothing Here! Check Out The Shop For Some Ideas!</p>
                    <button
                        onClick={() => {
                            (ref as MutableRefObject<HTMLDialogElement | null>).current?.close()
                            navigate('/shop')
                        }}
                        className='hover:bg-blue-400 transition bg-blue-500 rounded-lg p-2 text-white flex flex-row justify-center gap-2'>
                        <img style={{marginTop: '2px'}} src={shoppingBag} className='w-5 h-5'/>
                        Explore Now
                    </button>
                </div>

            }
        </dialog>
    )
})

export default CartModal;