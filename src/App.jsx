/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import { login, logout } from "./store/authSlice"
import authService from "./appwrite/auth"
import { Footer, Header } from "./components"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"


function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
 return !loading ? (
  <div className=" w-full h-full  bg-indigo-950  ">
    <div className="w-full ">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
 ): null
}

export default App
