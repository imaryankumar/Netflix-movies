import Link from 'next/link'
import { FC } from 'react'
import { SiNetflix } from 'react-icons/si';
interface navbarprops{}

const Navbar:FC<navbarprops> = () => {
  return (
    <nav className='w-full h-14 bg-white shadow  flex items-center text-center justify-between px-16 '>
      <div>
          <Link href="/">
            <SiNetflix className='text-red-500 text-2xl' />
          </Link>
      </div>
      <nav className='flex items-center justify-center list-none gap-5 '>
           <li className='hover:text-red-500'><Link href="/">Home</Link></li>
           <li className='hover:text-red-500'><Link href="/about">About</Link></li>
           <li className='hover:text-red-500'><Link href="/movies">Movie</Link></li>
           <li className='hover:text-red-500'><Link href="/contact">Contact</Link></li>
      </nav>
    </nav>
  )
}

export default Navbar