import {forwardRef} from "react";
import * as React from "react";

interface propTypes {
    type: string;
    label: string;
    hint: string
}

const Inputs = forwardRef(function Inputs({type, label, hint}: propTypes, ref) {

    return (
        <div className='space-y-1'>
            <label>{label}</label> <br/>
            {type === 'text' ?
                <input
                    ref={ref as React.Ref<HTMLInputElement>}
                    placeholder={hint}
                    className='placeholder:gray-200 placeholder:text-sm p-2 rounded border border-gray-200 focus:placeholder-transparent'
                    type={type}
                /> :
                type === 'select' ?
                    <select
                        ref={ref as React.Ref<HTMLSelectElement>}
                        style={{width: '440px'}}
                        className='placeholder:gray-200 placeholder:text-sm p-2 rounded border border-gray-200 focus:placeholder-transparent'>

                        <option className='text-gray-200 text-sm'>{hint}</option>
                        <option>Electronics</option>
                        <option>Home Appliance</option>
                        <option>Beauty & Healthcare</option>
                        <option>Daily Essentials</option>
                        <option>Books & Education</option>
                    </select> :

                    <textarea
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        style={{width: '440px'}}
                        className='h-28 placeholder:gray-200 placeholder:text-sm p-2 rounded border border-gray-200 focus:placeholder-transparent'
                        placeholder={hint}
                    />
            }
        </div>
    )
})

export default Inputs;