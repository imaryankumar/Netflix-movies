import ContactCard from '@/components/ContactCard'
import ContactForm from '@/components/ContactForm';
import { FC } from 'react'
import { AiTwotoneMail } from 'react-icons/ai';
import { IoMdChatbubbles } from 'react-icons/io';
import { RiVideoChatFill } from 'react-icons/ri';
interface contactprops{}


const Contact:FC<contactprops> = () => {
  return (
    <>
    <div className='py-10 text-center'>
      <h1 className='text-3xl font-extrabold'>Contact Us</h1>
    </div>
    <div className='flex items-center justify-center px-16 gap-5 '>
    <ContactCard icons={<AiTwotoneMail />}  title='Email' para1='Monday to Friday Expected' para2=' Response time 72 hours Send Email ' btn='Send Email'  />
    <ContactCard icons={<RiVideoChatFill />}  title='Live Chat' para1=' Weekdays: 9 AM - 6 PM ET ' para2=' Weekends: 9 AM - 5 PM ET ' btn='Chat Now' />
    <ContactCard icons={<IoMdChatbubbles />}  title='Community Forum' para1='Monday to Friday Expected' para2=' Response time 72 hours Send Email ' btn='Ask The Community' />
    </div>
    <div className='py-10 text-center flex flex-col items-center justify-center '>
       <div>
        <h1 className='text-2xl font-bold'>We'd love to hear <span className='text-red-500'>from you</span> </h1>
       </div>
       <ContactForm />
    </div>
    <div className='flex items-center justify-center'>
    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9486068268566!2d77.0688911749105!3d28.450965592303728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea3bcb922e83%3A0xc4e471b2f8babe2d!2sSquareboat!5e0!3m2!1sen!2sin!4v1683631298183!5m2!1sen!2sin" width={1280} height={450} style={{border:0}}  loading="lazy" ></iframe>
    </div>
    </>
  )
}

export default Contact