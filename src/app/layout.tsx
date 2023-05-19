'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { Mulish } from 'next/font/google';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
 
const mulish:any = Mulish({
  weight: '400',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Movies',
//   description: 'create by Movies Website',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <SessionProvider>
        <Navbar />
        <div className='min-h-[calc(100vh-65px)]'>
        {children}
        </div>
        <Footer />
        </SessionProvider>
        
      </body>
    </html>
  )
}
