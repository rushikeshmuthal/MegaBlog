/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/auth"
import { useNavigate } from "react-router-dom"


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=> {
        authService.logout()
        .then(()=> {
            dispatch(logout())
        })

    }
  return (
    <button 
    className=' inline-block px-6 py-2 duration-200h hover:bg-indigo-900 rounded-md'
    onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn