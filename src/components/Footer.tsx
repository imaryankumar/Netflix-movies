import { FC } from 'react'
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter,AiFillYoutube,AiOutlineInstagram } from 'react-icons/ai';
interface footerprops{}

const Footer:FC<footerprops> = () => {
  return (
    <div className='bg-black text-white w-full h-80 px-52  '>
        <div className='flex items-center justify-between py-5 '>
          <h1 className='text-xl font-extrabold '>Netflix Clone</h1>
          <div className='flex gap-5  '>
            <span className='bg-blue-500 icons_color '><FaFacebookF/></span>
            <span className='bg-blue-400 icons_color '><AiOutlineTwitter /></span>
            <span className='bg-pink-500 icons_color '><AiOutlineInstagram /></span>
            <span className='bg-blue-700 icons_color '><FaLinkedinIn /></span>
            <span className='bg-red-600 icons_color '><AiFillYoutube /></span>
          </div>
        </div>
        <div className='py-5 flex items-center justify-between '>
          <div className='flex flex-col gap-1 '>
            <h1 className='text-xl font-extrabold '>Company</h1>
            <h3 className='text-gray-400 cursor-pointer'>Home</h3>
            <h3 className='text-gray-400 cursor-pointer'>Contact us</h3>
            <h3 className='text-gray-400 cursor-pointer'>About us</h3>
            <h3 className='text-gray-400 cursor-pointer'>Get started</h3>
          </div>
          <div>
          <div className='flex flex-col gap-1 '>
            <h1 className='text-xl font-extrabold '>Services</h1>
            <h3 className='text-gray-400 cursor-pointer'>App design</h3>
            <h3 className='text-gray-400 cursor-pointer'>Web design</h3>
            <h3 className='text-gray-400 cursor-pointer'>Logo design</h3>
            <h3 className='text-gray-400 cursor-pointer'>Banner design</h3>
          </div>
          </div>
          <div>
          <div className='flex flex-col gap-1 '>
            <h1 className='text-xl font-extrabold '>Account</h1>
            <h3 className='text-gray-400 cursor-pointer'>Profile</h3>
            <h3 className='text-gray-400 cursor-pointer'>My account</h3>
            <h3 className='text-gray-400 cursor-pointer'>Prefrence</h3>
            <h3 className='text-gray-400 cursor-pointer'>Purchase</h3>
          </div>
          </div>
          <div>
          <div className='flex flex-col gap-1 '>
            <h1 className='text-xl font-extrabold '>Courses</h1>
            <h3 className='text-gray-400 cursor-pointer'>HTML && CSS</h3>
            <h3 className='text-gray-400 cursor-pointer'>Javascript</h3>
            <h3 className='text-gray-400 cursor-pointer'>Photography</h3>
            <h3 className='text-gray-400 cursor-pointer'>Photoshop</h3>
          </div>
          </div>
          <div>
          <div className='flex flex-col gap-2 '>
            <h1 className='text-xl font-extrabold  '>Subscribe</h1>
            <input type="text" name="" id="" className='w-full border outline-none bg-black px-2 py-1  rounded ' placeholder='Enter your email' />
            <button type='submit' className='w-full bg-white text-black px-2 py-1 rounded  '>Subscribe</button>
            <h3 className='text-black'>Photography</h3>
          </div>
          </div>
        </div>
        <div className='px-16 pt-10 flex items-center justify-between '>
          <div className='text-xs text-gray-500 flex gap-4 '>
          <span> Copyright @ 2023 Netflix clone</span> 
          <span>All rights reserved</span>
          </div>
          <div className='text-xs text-gray-500 flex gap-4 '>
          <span> Privacy policy </span> 
          <span>Term & condition</span>
          </div>
        </div>
    </div>
  )
}

export default Footer