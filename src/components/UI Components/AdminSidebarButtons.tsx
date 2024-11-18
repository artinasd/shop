interface propTypes {
    img: string
    title: string
    onClick?: any
}

function AdminSidebarButtons({img, title, onClick}: propTypes) {

    return (
        <button
            onClick={onClick}
            className='flex space-x-2 hover:scale-110 transition hover:bg-black hover:bg-opacity-10 p-1 transform rounded'>
                <img className='w-5' src={img} />
                <li>{title}</li>
        </button>
    )
}

export default AdminSidebarButtons