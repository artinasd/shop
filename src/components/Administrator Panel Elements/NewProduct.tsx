import Inputs from "../UI Components/Inputs.tsx";
import uploadIcon from '../../assets/upload.png'
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {shopActions} from "../../data/shopSlice.ts";
// import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function NewProduct() {
    const dispatch = useDispatch()
    const refTitle = useRef<HTMLInputElement>(null)
    const refPrice = useRef<HTMLInputElement>(null)
    const refCategory = useRef<HTMLSelectElement>(null)
    const refDescription = useRef<HTMLTextAreaElement>(null)
    const refImage = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const [previewImage, setPreviewImage] = useState<string>(uploadIcon)

    //
    // const reduxthing = useSelector((state: RootState) => state.shop)
    // console.log(reduxthing)
    //

    function handleImageUpload(file: File) {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result as string)
            }
            reader.onerror = error => {
                reject(error)
            }
        })
    }

    async function handleSubmit() {
        const id = Date.now()
        const title = refTitle.current?.value || ''
        const price = parseFloat(refPrice.current?.value || '')
        const category = refCategory.current?.value || ''
        const description = refDescription.current?.value || ''
        const status = 'Active'

        let imageBase64 = ''
        if (refImage.current?.files?.[0]) {
            imageBase64 = await handleImageUpload(refImage.current.files[0])
        }

        dispatch(shopActions.addProduct({id, title, price, description, category, status, image: imageBase64}))

        navigate(`/admin/new-product/product-review/${id}`)
    }
    
    function handleImageAdd() {
        refImage.current?.click()

        refImage.current?.addEventListener('change', async () => {
            const file = refImage.current?.files?.[0]
            if (file) {
                const imageBage64 = await handleImageUpload(file)
                setPreviewImage(imageBage64)
            }
        })
    }

    return (
        <div className='bg-white rounded-lg w-fit p-10 flex flex-col items-center mx-auto m-16 border border-gray-50 space-y-6 shadow-lg'>
            <h2 className='text-2xl mr-auto font-bold mb-2'>Add New Product</h2>

            <div className='flex flex-row space-x-10'>
                <Inputs ref={refTitle} hint='Enter the product name' type='text' label='Product Name'/>
                <Inputs ref={refPrice} hint="Enter the product's price" type='text' label='Price'/>
            </div>

            <Inputs ref={refCategory} hint='Select the Category' type='select' label='Category'/>

            <Inputs ref={refDescription} type='textArea' hint="Enter the product's description" label='Description'/>

            <div className='mr-auto space-y-1'>
                <h2>Product Image</h2>
                <div onClick={handleImageAdd} className='border border-dashed rounded-lg border-2 p-6 border-gray-300'>
                    <img src={previewImage} className='h-12 w-12 opacity-40'/>
                    <input ref={refImage} type='file' style={{display: "none"}}></input>
                </div>
            </div>

            <button onClick={handleSubmit} className='bg-black rounded-lg text-white py-2 bg-opacity-80' style={{width: '440px'}}>Add Product</button>

        </div>
    )
}

export default NewProduct;