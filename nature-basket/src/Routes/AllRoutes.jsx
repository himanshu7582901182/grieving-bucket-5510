
import { Route, Routes } from 'react-router-dom'

import React from 'react'
import HomePage from '../Components/HomePage'
import BookStore from '../Components/BookStore'
import Addmin from '../Components/Addmin'
// import { Login } from '../Components/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} ></Route>
            {/* <Route path='/login' element={<Login/>} ></Route> */}
            <Route path='/admin' element={<Addmin/>} ></Route>
            <Route path='/bookstore' element={<BookStore />}  ></Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes