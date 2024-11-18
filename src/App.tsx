import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/Prmenant Elements/RootLayout.tsx";
import HomePage from "./components/HomePage.tsx";
import Shop from "./components/Shop.tsx";
import NewProduct from "./components/Administrator Panel Elements/NewProduct.tsx";
import ProductReview from "./components/Administrator Panel Elements/ProductReview.tsx";
import AdminRootLayout from "./components/Administrator Panel Elements/Administrator Permenant Elements/AdminRootLayout.tsx";
import AdminPanel from "./components/Administrator Panel Elements/Administrator Permenant Elements/AdminPanel.tsx";
import ProductsList from "./components/Administrator Panel Elements/ProductsList.tsx";
import ProductView from "./components/ProductView.tsx";
import ProductEdition from "./components/Administrator Panel Elements/ProductEdition.tsx";

function App() {
    // localStorage.clear()

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {path: "/", element: <HomePage />},
                {path: '/shop', element: <Shop />},
                {path: '/shop/products/:productId', element: <ProductView />},
                {path: '/shop/products/:productId/edit', element: <ProductEdition />}
                    ]
        },

        {
            path: 'admin',
            element: <AdminRootLayout />,
            children: [
                {path: '', element: <AdminPanel />},
                {path: 'new-product', element: <NewProduct />},
                {path: 'new-product/product-review/:productId', element: <ProductReview />},
                {path: 'products-list', element: <ProductsList />}
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
