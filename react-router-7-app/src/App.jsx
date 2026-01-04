import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import College from './College'
import ErrorPage from "./ErrorPage"
import Student from './Student'
import Department from './Department'
import Details from './Details'
import UserList from './UserList'
import UserDetails from "./UserDetails"

function App() {
  return (
    
    <div>
      
      <Routes>
      <Route element={<NavBar/>}>
      <Route path="/" element={<Home/>}></Route>

      <Route path="usa">
        <Route path="/usa/user/about" element={<About/>}></Route>
        <Route path="/usa/user/login" element={<Login />}></Route>
      </Route>

      <Route path="/users" element={<UserList />}></Route>
      <Route path="/users/:id" element={<UserDetails />}></Route>
      

      </Route>


      <Route path="/college" element={<College />}>
        <Route path="student" element={<Student />}></Route>
        <Route index element={<Student />}></Route>
        <Route path="department" element={<Department />}></Route>
        <Route path="details" element={<Details />}></Route>
      </Route>


      <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
    
  )
}

export default App
