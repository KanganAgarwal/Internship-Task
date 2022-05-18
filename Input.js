import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
const Input = ({placeholder,showArrow,showTextarea,val,showSelect}) => {
  return (
    <div  className="my-2 flex items-center justify-between border border-gray-400 rounded-md mr-4 pr-4">
       
        {showTextarea ?(<textarea type="text" placeholder={placeholder}  className="outline-none  px-3 py-2 flex-1 placeholder:slate-50 placeholder:text-sm" ></textarea>):( <input type="text" placeholder={placeholder} value={val} className="outline-none  px-3 py-2 flex-1 placeholder:slate-50 placeholder:text-sm" />)}
{showSelect && (
<div className="flex items-center space-x-3">
    <div className="bg-gray-100 px-3 py-[3px] text-gray-400 rounded-md">0</div>
    <div className="bg-gray-100 flex items-center px-3 py-[3px] space-x-2 rounded-md">
        <p className="text-gray-400">Select</p>
        <ChevronDownIcon  className="h-5 w-5 text-gray-500"/>
    </div>
</div>)}
        {showArrow && 
(<ChevronDownIcon  className="h-5 w-5 text-gray-600"/>)}
    </div>
  )
}

export default Input