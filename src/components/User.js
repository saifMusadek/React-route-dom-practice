import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
export const User = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        <h4>
        user 1
        user 2
        user 3
        </h4>
        <Outlet/>
        <button onClick={()=> setSearchParams({filter:"active"})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        {showActiveUsers?(<h2>Showing Active Users</h2>):(<h2>Showing All Users</h2>)}
    </div>
  )
}
