"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    const session = useSession()
    const status = session?.status
    const userData = session.data?.user
    let userName = userData?.name||userData?.email
    if(userName&&userName.includes(" ")){
        userName = userName.split(" ")[0]
    }
    return (
        <header className='flex items-center justify-between'>
            <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                <Link href="/" className='text-primary font-semibold	 text-2xl'>ST PIZZA</Link>
                <Link href="/">Home</Link>
                <Link href="">Menu</Link>
                <Link href="">About</Link>
                <Link href="">Context</Link>
            </nav>
            <nav className='flex gap-4 items-center text-gray-500 font-semibold'>
                {status === "authenticated" &&
                   <>
                   <Link href="/profile" className='whitespace-nowrap'>Hello, {userName}</Link>
                   <button onClick={()=>signOut()} className='bg-primary text-white rounded-full px-8 py-2'>Logout</button>
                   </>
                }
                {status === "unauthenticated" &&(
                <>
                <Link href="/login">Login</Link>
                <Link href="/register" className='bg-primary text-white rounded-full px-8 py-2'>Register</Link>
                </>
                )}
            </nav>
        </header>
    )
}
