import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between pl-12 bg-blue-900 h-[3.5rem] items-center font-bold text-2xl text-white rounded-br-2xl rounded-bl-2xl'>
        <h1 className='text-3xl'>WebUi.</h1>
        <ul className='flex justify-between gap-10 pr-12 '>
            <li className='hover:text-gray-200'>Home</li>
            <li className='hover:text-gray-200'>About</li>
            <li className='hover:text-gray-200'>Services</li>
        </ul>
    </nav>
  )
}

export default Navbar