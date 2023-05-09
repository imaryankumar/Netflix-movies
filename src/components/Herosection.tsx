import  { FC } from 'react'
interface titleProps{
    titles:string
    images:any
}

const Herosection:FC<titleProps> = ({titles,images}) => {
  return (
    <div className='h-[30rem] bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-between px-24'>
        <div className='px-28 flex flex-col gap-5 items-start '>
     <h1 className=" font-black  text-5xl uppercase  ">{titles}</h1>
     <p className=' font-thin pb-4 '>Lorem, ipsum dolor to the full name of sed laborum reprehenderit minus enim molestias numquam asperiores 
        repellendus distinctio itaque.</p>
     <button className=' text-sm outline-none rounded-2xl px-4 py-2 bg-black text-white hover:text-black hover:bg-white cursor-pointer '>Explore Movies</button>
        </div>
        <div>
            {images}
        </div>
    </div>
  )
}

export default Herosection