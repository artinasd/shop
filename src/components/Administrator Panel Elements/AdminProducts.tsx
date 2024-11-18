import {useNavigate} from "react-router-dom";

interface propTypes {
    title: string
    img: string
    category: string
    price: number
    status: string
    id: number
}

function AdminProducts({id, img, title, category, price, status}: propTypes) {
    const navigate = useNavigate()

    return (
        <>
            <div className='grid grid-cols-6 gap-10 h-12 pl-5 my-3 flex items-center'>

                <button className='col-span-2' onClick={() => navigate(`/shop/products/${id}`)}>
                    <div className='col-span-2 flex items-center'>
                        <img className='w-10 mr-2' src={img}/>
                        <h2 style={{width: '200px'}}
                            className='whitespace-nowrap overflow-hidden text-ellipsis inline-block'>{title}</h2>
                    </div>
                </button>

                <div className='col-span-1'>
                    <p style={{width: '100px'}}
                       className='whitespace-nowrap overflow-hidden text-ellipsis inline-block'>{category}</p>
                </div>

                <div className='col-span-1'>
                <p>${price}</p>
                </div>

                <div className='col-span-1'>
                    <p>{status}</p>
                </div>

                <div className='col-span-1'>
                    <p><button className='hover:underline' onClick={() => navigate(`/shop/products/${id}/edit`)}>Details</button></p>
                </div>

            </div>

            <hr className='border border-gray-100'/>
        </>
    )
}

export default AdminProducts;