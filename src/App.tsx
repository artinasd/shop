import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/Prmenant Elements/RootLayout.tsx";
import HomePage from "./components/HomePage.tsx";
import Shop from "./components/Shop.tsx";
import AdminPanel from "./components/Administrator Panel Elements/AdminPanel.tsx";
import NewProduct from "./components/Administrator Panel Elements/NewProduct.tsx";
import ProductReview from "./components/Administrator Panel Elements/ProductReview.tsx";

function App() {
    // localStorage.clear()

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {path: "/", element: <HomePage />},
                {path: '/shop', element: <Shop />},
                {path: 'admin', element: <AdminPanel />},
                {path: 'admin/new-product', element: <NewProduct />},
                {path: 'admin/new-product/product-review/:productId', element: <ProductReview />}
                    ]
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
