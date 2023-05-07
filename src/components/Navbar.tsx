import Link from 'next/link'
import React from 'react'
import { SiNetflix } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className='w-full h-14 bg-white shadow  flex items-center text-center justify-between px-16 '>
      <div>
          <Link href="/">
            <SiNetflix className='text-red-500 text-2xl' />
          </Link>
      </div>
      <nav className='flex items-center justify-center list-none gap-5 '>
           <li><Link href="/">Home</Link></li>
           <li><Link href="/about">About</Link></li>
           <li><Link href="/movies">Movie</Link></li>
           <li><Link href="/contact">Contact</Link></li>
      </nav>
    </nav>
  )
}

export default Navbar