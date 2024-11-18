import {Outlet} from "react-router-dom";
import AdminHeader from "./AdminHeader.tsx";
import AdminSidebar from "./AdminSidebar.tsx";

function AdminRootLayout() {

    return (
        <div className='min-h-screen bg-gray-50 flex'>
            <div className='fixed top-0 left-0 w-40 h-full z-10'>
                <AdminSidebar />
            </div>
            <div className='flex flex-col flex-grow'>
                <AdminHeader/>

                <div className='flex-grow'>
                    <Outlet/>
                </div>
            </div>


        </div>
    )
}

export default AdminRootLayout;