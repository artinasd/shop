import header from '../../assets/header.png'
import computerIcon from '../../assets/icons (2).png'
import electronicsIcon from '../../assets/icons (3).png'
import watchIcon from '../../assets/icons (1).png'
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-gray-100 w-screen grid grid-cols-2'>
                <div className='col-span-1 mt-10 ml-40'>
                    <h2 className='col-span-1 font-bold text-5xl'>GREAT DEALS ON<br/>HEADPHONES</h2>
                    <p className='font-light mt-4'>Find out the bestselling headphones on the market <br/> 2024
                        on-demand
                        brands all in one place</p>
                    <div className='font-light mt-4'>
                        <button className='text-blue-500 border border-blue-500 rounded-full px-4 p-2 hover:border-blue-700 transition'>
                            Learn More
                        </button>
                        <button onClick={() => navigate('/shop')}
                                className='text-white ml-2 bg-blue-500 rounded-full px-8 p-2 hover:bg-blue-700 transition'>
                            Explore
                        </button>
                    </div>
                </div>
                <img className='col-span-1 w-72 mr-48 ml-auto' src={header}/>
            </div>

            <div className='flex flex-row items-center space-x-5 text-blue-500 mt-6'>

                <div className='bg-white w-fit p-8 shadow-lg hover:scale-105 transform transition'>
                    <div className='flex flex-row items-center'>
                        <img className='w-16' src={computerIcon}/>
                        <div>
                            <p className='font-bold'><span className='text-2xl font-bold'>+300</span> Computers</p>
                            <p className='text-xs text-gray-400 font-light'>BROWSE NOW</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-fit p-8 shadow-lg hover:scale-105 transform transition'>
                    <div className='flex flex-row items-center'>
                        <img className='w-20' src={electronicsIcon}/>
                        <div>
                            <p className='font-bold'><span className='text-2xl font-bold'>+120</span> Electronics</p>
                            <p className='text-xs text-gray-400 font-light'>BROWSE NOW</p>
                        </div>
                    </div>

                </div>

                <div className='bg-white w-fit p-8 shadow-lg hover:scale-105 transform transition'>
                    <div className='flex flex-row items-center'>
                        <img className='w-16' src={watchIcon}/>
                        <div>
                            <p className='font-bold'><span className='text-2xl font-bold'>+30</span> Gadgets</p>
                            <p className='text-xs text-gray-400 font-light'>BROWSE NOW</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;