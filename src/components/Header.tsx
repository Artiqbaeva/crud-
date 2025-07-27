import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border-b border-gray-300 '>
      <nav className='h-16 container mx-auto flex items-center gap-6'>
        <div className='font-bold'>EXAM</div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/likes"}>Likes</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </nav>
    </header>
  )
}

export default React.memo(Header)