import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
const [user, setUser] = useState('')
const auth = useAuth()
const navigate = useNavigate()

const handleLogin = () => {
    auth.login(user)
    navigate('/', {replace:true})
}


return (
    <div>        
        <label>
            User Name: {' '}
            <input type='text' onChange={(e) => setUser(e.target.value)}></input>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )

}
