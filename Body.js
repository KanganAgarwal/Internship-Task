import React from 'react'
import CourseSelected from './CourseSelected'
import Input from './Input'

const Body = () => {
    const n=8;
  return (
    <div className="flex-[0.75] bg-white p-4 rounded-md ">
        <p  className="font-semibold text-lg text-gray-700">Basic Details</p>
        <Input  placeholder="Course Name *"/>
        <Input placeholder="Mode of course *" showArrow/>
        <Input placeholder="Course duration*" showSelect/>
        <Input placeholder="Course description*" showTextarea/>
        <Input placeholder=" " val="Design" showArrow/>
        <div className="flex item-center space-x-3 flex-wrap">
            {[...Array(n)].map((i=>(
                <CourseSelected key={i}/>
            )))}

        </div>
    </div>
  )
}

export default Body