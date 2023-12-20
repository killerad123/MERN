import React from 'react'
import "./App.css"
import HomePage from './components/HomePage'
import LogIn from "./components/LogIn"
import {Routes,Route } from 'react-router-dom'
import AdminComponent from './components/AdminLogIn'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import ShowMovie from './components/ShowMovie'
import AdminProfile from './components/AdminProfile'
export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/admin' element={<AdminComponent/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/admin/profile' element={<AdminProfile/>}/>
      <Route path='/:movieName' element={<ShowMovie/>}/>
      <Route path='/userprofile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

