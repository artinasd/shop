import logo from '../../assets/logo.jpg'
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <>
            <header className='flex flex-row bg-white h-20 w-screen mt-0 top-0 font-bold'>
                <div className='flex items-center ml-48'>
                    <img src={logo} className='h-20'/>
                    <h1>Online Shop</h1>
                </div>

                <div className='flex items-center space-x-6 ml-auto mr-48'>
                    <h2 className='hover:underline'><Link to='/'>Home</Link></h2>
                    <h2 className='hover:underline'>Blog</h2>
                    <h2 className='hover:underline'><Link to='/shop'>Shop</Link></h2>
                    <h2></h2>
                </div>
            </header>

            <hr className='border border-gray-50 w-screen shadow'/>
        </>
    )
}

export default Navbar;