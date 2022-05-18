import React,{useState} from 'react'
import {data} from "../Data"
const SidebarComp = () => {
   
   
  
   
  return (
    <div  >{
        data.map(({title,subtitle})=>(
            <div key={title}>
             
        <p  className="font-semibold text-lg text-gray-700" >{title}</p>
      
            <div className="bg-white shadow-lg px-3 py-2 rounded-lg mt-4">
            {subtitle.map(sub=>(
                <div key={sub} >
                {sub.includes("Basic Details")?(<p className="font-medium text-xs my-2 text-violet-500">{sub}</p>):(<p  className="font-medium text-xs my-2 text-gray-600">{sub}</p>)}
                </div>
            ))}
            </div>
              <br/>
            </div>
         
        ))}
      
      
    </div>
  )
}

export default SidebarComp