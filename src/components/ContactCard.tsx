import React, { FC } from 'react'
interface conatctcardprops{
    icons:any;
    title:string;
    para1:string;
    para2:string;
    btn:string;
}

const ContactCard:FC<conatctcardprops> = ({icons,title,para1,para2,btn}) => {
  return (
    <div className='w-full h-44 bg-white shadow my-5 py-2 '>
     <div className='flex flex-col items-center justify-center gap-3'>
        <span className='text-red-500 text-2xl '>{icons}</span>
        <p className=' font-extrabold'>{title}</p>
        <div className=' text-center text-sm  '>
            <span>{para1}</span>
            <br />
          <span>{para2}</span>
        </div>
      <h3>{btn} &#8594;</h3>
     </div>
    </div>
  )
}

export default ContactCard