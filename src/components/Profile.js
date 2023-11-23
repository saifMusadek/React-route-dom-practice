import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {

    const navigate = useNavigate()
    const auth = useAuth()
    function handleLogout(){
        auth.logout()
        navigate('/')
    }
  return (
    <div>
        Welcom {auth.user}
        <button onClick={handleLogout}>Logout</button> 
    </div>
  )
}
