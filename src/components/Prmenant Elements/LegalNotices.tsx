function LegalNotices() {

    return (
        <div className='bg-black bg-opacity-90 grid grid-cols-2 gap-20 text-gray-400 font-light w-screen text-xs py-8'>
            <div className='col-span-1 ml-auto mr-72'>
                <p>All rights reserved.</p>
            </div>

            <div className='col-span-1 flex flex-row space-x-5 mr-auto ml-48'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default LegalNotices;