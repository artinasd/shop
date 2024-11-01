import BlogSamples from "./Homepage Elements/BlogSamples.tsx";
import Header from "./Homepage Elements/Header.tsx";
import SampleProducts from "./Homepage Elements/SampleProducts.tsx";
import ShopNavigation from "./Homepage Elements/ShopNavigation.tsx";
import Sponsors from "./Homepage Elements/Sponsors.tsx";

function HomePage() {

    return (
        <div className='flex flex-col items-center bg-gray-50 w-screen min-h-screen'>
            <Header />
            <SampleProducts />
            <ShopNavigation />
            <BlogSamples />
            <Sponsors />
        </div>
    )
}

export default HomePage