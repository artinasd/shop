import acc from '../../../assets/account.png'
import down from '../../../assets/down.png'

function AdminHeader() {

    return (
        <div className='bg-white w-screen h-20 flex items-center justify-between'>
            <div className='ml-44 font-black opacity-40'>
                <p>Dynamic: Administrator Panel</p>
            </div>

                <div className='opacity-50 flex items-center mr-4'>
                    <img src={acc} className='w-10'/>
                    <img src={down} className='w-6 h-6 mt-2'/>
                </div>
            </div>
    )
}

export default AdminHeader;