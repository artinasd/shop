import logo from '../../../assets/logo.jpg'
import gear from '../../../assets/gear.png'
import person from '../../../assets/person.png'
import shapes from '../../../assets/shapes.png'
import dash from '../../../assets/dash.png'
import add from '../../../assets/add.png'
import AdminSidebarButtons from "../../UI Components/AdminSidebarButtons.tsx";
import {useNavigate} from "react-router-dom";

function AdminSidebar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-white min-h-screen w-40 flex flex-col items-center text-gray-400 border-r border-r-2 border-r-gray-50">
                <button>
                    <img src={logo} className='w-28 -m-1' onClick={() => navigate('/')}/>
                </button>

                <div className='items-start'>
                    <ul className='mt-8 space-y-5'>
                        <AdminSidebarButtons title='Dashboard' img={dash} onClick={() => navigate('/admin')} />
                        <AdminSidebarButtons title='Add New' img={add} onClick={() => navigate('/admin/new-product')} />
                        <AdminSidebarButtons title='Products' img={shapes} onClick={() => navigate('/admin/products-list')} />
                        <AdminSidebarButtons title='Costumers' img={person} />
                        <AdminSidebarButtons title='Settings' img={gear}/>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default AdminSidebar;