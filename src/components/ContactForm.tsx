"use client"
import { spawn } from 'child_process';
import React, { useState } from 'react'

const ContactForm = () => {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [message,setMessage]=useState('');
const [error,setError]=useState(false);

const allData={name,email,phone,message};

  const onFormHandler = (e:any)=>{
    e.preventDefault(); 
    if(name=='' || email=='' || phone =='' || message==''){
      setError(false);
    }else{
      setError(true);
    }
  
  }

 

  return (
    <div className='mt-5 w-64 h-96 shadow '>
    <form className='flex flex-col gap-1 py-2 text-black ' onSubmit={(e)=>onFormHandler(e)} >
      <div className='px-5 '>
        <label htmlFor="name" className='flex text-sm py-1 '>Enter Your Name </label>
        <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name' className='px-2 w-full border text-sm py-1 rounded  ' required />
      </div>
      <div className='px-5 '>
        <label htmlFor="email" className='flex text-sm py-1 '>Email</label>
        <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter your email' className='px-2 w-full border text-sm py-1 rounded ' required />
      </div>
      <div className='px-5 '>
        <label htmlFor="number" className='flex text-sm py-1 '>Phone Number </label>
        <input type="number" name="phone" id="number" onChange={(e)=>setPhone(e.target.value)}  placeholder='Enter your number' className='px-2 w-full border text-sm py-1 rounded ' required />
      </div>
      <div className='px-5 '>
        <label htmlFor="message" className='flex text-sm py-1 '>Message</label>
        <textarea name="message" id="message" cols={10} rows={4}  onChange={(e)=>setMessage(e.target.value)} placeholder='Enter your message' className='px-2 w-full border text-sm rounded  ' required></textarea>
      </div>
      <div className='px-5 text-left '>
      <button type='submit' className=' text-xs outline-none rounded-2xl px-4 py-2 border bg-black text-white hover:text-black hover:bg-white cursor-pointer '>Send Message</button>
      </div>
       {
        error ? <span className='text-blue-500'>Submit Successfull</span>: <span className='text-red-500'>The Fields are mandatory</span>
       }
    </form>
  </div>
  )
}

export default ContactForm