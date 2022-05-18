import { XIcon } from '@heroicons/react/solid'
import React from 'react'

const CourseSelected = () => {
  return (
    <div  className="bg-violet-600 text-white rounded-md flex items-center w-[120px] px-[6px] py-2 space-x-2 my-1 ">
        <p className="text-xs">Graphic Design</p>
        <XIcon  className="h-4 w-4 cursor-pointer"/>
    </div>
  )
}

export default CourseSelected