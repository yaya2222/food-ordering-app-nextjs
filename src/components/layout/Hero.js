import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

export default function Hero() {
    return (
        <section className='hero mt-4'>
            <div className='py-12'>
                <h1 className='text-4xl font-semibold'>Everything<br />is better<br />with a&nbsp;
                    <span className='text-primary'>Pizza</span></h1>
                <p className='my-6 text-gray-500 text-sm'>Pizza is the missing piecs that makes every day complete, a simple yet delicious joy in life</p>
                <div className='flex gap-4'>
                    <button className='flex justify-center items-center gap-2 uppercase bg-primary text-white text-sm rounded-full px-4 py-2'>Order now <Right /></button>
                    <button className='flex gap-2 border-0 items-center py-2 text-gray-600 font-semibold'>Learn more <Right /></button>
                </div>
            </div>
            <div className='relative'>
                <Image src="/pizza.png" alt='pizza' layout='fill' objectFit='contain' />
            </div>
        </section>
    )
}
