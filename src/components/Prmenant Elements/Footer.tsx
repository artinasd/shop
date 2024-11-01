import lightLogo from '../../assets/lightLogo.png'
import mailLogo from '../../assets/mailLogo.png'
import phoneLogo from '../../assets/phoneLogo.png'
import locationLogo from '../../assets/locationLogo.png'
import likeLogo from '../../assets/like.png'
import ytLogo from '../../assets/yt.png'
import webLogo from '../../assets/web.png'

function Footer() {

    return (
        <div className='bg-black bg-opacity-80 px-36 py-16 w-screen grid grid-cols-3 gap-48 text-gray-400 text-sm'>
            <div className='col-span-1'>
                <div className='flex flex-row items-center mb-8'>
                    <img src={lightLogo} className='w-20 -mt-3.5'/>
                    <h2 className='font-bold text-white text-lg'>Romisa Kala</h2>
                </div>

                <div className='flex flex-row items-center mb-2 space-x-4'>
                    <img className='w-5 h-5' src={locationLogo} />
                    <p>Velayat Highway UoB 555</p>
                </div>

                <div className='flex flex-row items-center mb-2 space-x-4'>
                    <img className='w-5 h-5' src={mailLogo} />
                    <p>romisa@example.com</p>
                </div>

                <div className='flex flex-row items-center mb-4 space-x-4'>
                    <img className='w-5 h-5' src={phoneLogo} />
                    <p>0990 115 3548</p>
                </div>

                <hr className='mb-4 w-56 border border-gray-600' />

                <div className='flex flex-row items-center space-x-14 ml-6'>
                    <img src={webLogo} className='w-5 h-5' />
                    <img src={ytLogo} className='w-5 h-5' />
                    <img src={likeLogo} className='w-5 h-5' />
                </div>
            </div>

            <div className='col-span-1'>
                <h2 className='text-white font-bold mb-8'>ABOUT US</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem fringilla faucibus accumsan velit cursus suscipit proin mus. Consectetuer adipiscing elit.
                </p>

                <button className='text-white font-bold text-xs border border-blue-600 rounded-full p-2 px-20 mt-4'>
                    LET'S TALK
                </button>
            </div>

            <div className='col-span-1'>
                <h2 className='text-white font-bold mb-8'>USEFUL LINKS</h2>

                <div className='mb-4 space-y-2'>
                    <p>DELIVERY & RETURNS</p>
                    <p>PAYMENT OPTIONS</p>
                    <p>ORDER TRACKING</p>
                    <p>COSTUMER SUPPORT</p>
                    <p>OUR BLOG</p>
                    <p>FAQ'S</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;