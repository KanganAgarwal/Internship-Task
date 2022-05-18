import React from 'react'
import Body from './Body'
import Header from './Header'
import Sidebar from './Sidebar'

const Box = () => {
  return (
    <div  className=" h-[86%] w-[90%] mx-auto shadow-xl rounded-lg">
        <Header/>
        <div className="flex items-center space-x-14">
            <Sidebar/>
            <Body/>
        </div>
    </div>
  )
}

export default Box