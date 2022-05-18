import React from 'react'
import {ChevronLeftIcon} from "@heroicons/react/solid"

const Header = () => {
  return (
    <div className="flex item-center justify-between px-4 py-4 mt-[1px] bg-white shadow-xl shadow-violet-200 ">
        <div  className="flex item-center">
            <ChevronLeftIcon className="h-7 w-7"/>
            <p  className="text-base">Back to courses</p>
        </div>
        <div  className="border border-violet-700 text-violet-700 rounded-lg px-[7px] p-1 text-sm font-medium">Save as draft</div>
    </div>
  )
}

export default Header