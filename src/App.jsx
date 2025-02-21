import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import { Routes ,Route, Navigate,Outlet , useLocation } from "react-router-dom"
import Tasks from './pages/Tasks'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Trash from './pages/Trash'
import Taskdetailes from './pages/Taskdetailes'
import Toaster from "sonner"

function App() {
 

  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>

        <Route element = {<Layout/>}>
        <Route path='/' element={<Navigate to ="/dashboard" />} />
        <Route path = '/dashboard >' element = {<Dashboard/>} />
        <Route path = '/tasks >' element = {<Tasks/>} />
        <Route path = '/completed/:status >' element = {<Tasks/>} />
        <Route path = '/in-progress/:status >' element = {<Tasks/>} />
        <Route path = '/todo/:status >' element = {<Tasks/>} />
        <Route path = '/teams >' element = {<Users/>} />
        <Route path = '/trashed >' element = {<Trash/>} />
        <Route path = '/task/:id >' element = {<Taskdetailes/>} />
        </Route>
        <Route path = '/log-in' element = {<Login/>} />


      </Routes>
    
  
    </main>

  )
}

export default App
