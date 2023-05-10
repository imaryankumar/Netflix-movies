import  { FC } from 'react'
interface titleProps{
    titles:string
    images:any
}

const Herosection:FC<titleProps> = ({titles,images}) => {
  return (
    <div className='h-[30rem] bg-gradient-to-r from-purple-500 to-pink-400 block md:flex items-center justify-between px-1 md:px-24'>
        <div className='md:px-28 px-16 flex flex-col md:gap-5 gap-1 py-2 items-start '>
     <h1 className=" font-black md:text-5xl text-2xl uppercase  ">{titles}</h1>
     <p className=' text-xs md:text-base font-thin pb-2 md:pb-4 '>Lorem, ipsum dolor to the full name of sed laborum reprehenderit minus enim molestias numquam asperiores 
        repellendus distinctio itaque.</p>
     <button className=' text-sm outline-none rounded-2xl px-3 md:px-4 py-2  bg-black text-white hover:text-black hover:bg-white cursor-pointer '>Explore Movies</button>
        </div>
        <div className='flex items-center justify-center'>
            {images}
        </div>
    </div>
  )
}

export default Herosection