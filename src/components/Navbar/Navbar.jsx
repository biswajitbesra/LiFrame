import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <nav className='flex justify-around items-center text-2xl h-12vh w-full sticky top-0 bg-third text-primary shadow-2xl rounded-b-4xl z-10'>
            <NavLink to='/' className='cursor-pointer'>LiFrame</NavLink>
            <div>
                <ul className='flex gap-6 cursor-pointer text-base'>
                    <li className='relative'>
                        <NavLink to='/docs' className={({isActive}) => `after:absolute after:bottom-0 after:left-0 after:w-2 hover:after:w-full after:transition-all hover:after:duration-300 after:h-2px after:bg-black ${isActive ? "after:w-full" : "after:w-2"}`}>Docs</NavLink>
                    </li>
                    <li className='relative'>
                        <NavLink to='/components' className={({isActive}) => `after:absolute after:bottom-0 after:left-0 after:w-2 hover:after:w-full after:transition-all hover:after:duration-300 after:h-2px after:bg-black  ${isActive ? "after:w-full" : "after:w-2"}`}>Components</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Home
