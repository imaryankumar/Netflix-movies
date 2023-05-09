import React, { FC } from 'react'
import {useRouter} from 'next/navigation'
interface cardprops{
    title:string;
    poster:any;
    year:number;

}


const Card:FC<cardprops> = ({title,poster,year}) => {
  const router=useRouter();
  const handleclick = ()=>{
    router.push(`/movies/${1}`)
  }

  return (
    <div className='w-80 h-96 shadow text-left  '>
  
   <img src={poster} alt="poster" className='w-80 h-36' />
    <p>hello Everyone how rae yout this is the best part to show</p>
   <h1>{title}</h1>
   <p>{year}</p>
   <button onClick={handleclick} className='text-sm border rounded-2xl px-4 py-2 bg-black text-white hover:text-black hover:bg-white cursor-pointer '>Read More</button>
    </div>
  )
}
 
export default Card