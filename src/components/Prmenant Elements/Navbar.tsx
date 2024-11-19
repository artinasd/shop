import logo from '../../assets/logo.jpg'
import {Link} from "react-router-dom";
import CartModal from "../CartModal.tsx";
import {useRef} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../data/CartSlice.ts";

function Navbar() {
    const reduxState = useSelector((state: RootState) => state.cart);

    // Use reduce to calculate total quantity directly
    const totalQuantity = reduxState.reduce(
        (acc: number, each: any) => acc + Number(each.quantity),
        0
    );
    const cartModalRef = useRef<HTMLDialogElement>(null)
    function handleCartClick() {
        cartModalRef.current?.showModal()
    }

    return (
        <>
            <CartModal ref={cartModalRef} />
            <header className='flex flex-row bg-white h-20 w-screen mt-0 top-0 font-bold'>
                <div className='flex items-center ml-48'>
                    <img src={logo} className='h-20'/>
                    <h1>Online Shop</h1>
                </div>

                <div className='flex items-center space-x-6 ml-auto mr-48'>
                    <h2 className='hover:underline'><Link to='/'>Home</Link></h2>
                    <h2 className='hover:underline'>Blog</h2>
                    <h2 className='hover:underline'><Link to='/shop'>Shop</Link></h2>
                    <h2 onClick={handleCartClick} className='hover:underline'>Cart({totalQuantity})</h2>
                    <h2></h2>
                </div>
            </header>

            <hr className='border border-gray-100 w-screen shadow'/>
        </>
    )
}

export default Navbar;