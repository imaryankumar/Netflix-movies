import React, { FC } from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image';
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
    <div className=' w-full md:w-80 h-80 shadow text-left  '>
  
   <Image width={100} height={100} src={poster} alt="poster" className='w-80 h-36' />
   <div className=' px-2 md:px-10 flex flex-col gap-2 justify-center text-center '>
   <h1 className='text-lg font-bold '>{title}</h1>
   <p>hello Everyone how rae yout this is the best part to show</p>
   <p>{year}</p>
   <button onClick={handleclick} className='text-sm border rounded-2xl px-4 py-2 bg-black text-white hover:text-black hover:bg-white cursor-pointer '>Read More</button>
   </div>
    </div>
  )
}
 
export default Card