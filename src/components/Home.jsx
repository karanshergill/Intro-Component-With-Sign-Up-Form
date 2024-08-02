import React from 'react'
import { TrialSignUpForm } from './TrialSignUpForm'

export const Home = () => {
    return (
        <section className='w-3/4'>
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col px-4 gap-8 justify-center'>
                    <h1 className='text-5xl font-semibold leading-[54px] text-white'>Learn to code by watching others</h1>
                    <p className='text-white'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                        but understanding how developers think is invaluable.</p>
                </div>
                <div className='flex flex-col ml-10'>
                    <div className='bg-color-blue text-center py-3.5 rounded-lg'>
                        <p className='text-sm text-color-grayish-blue'><span className='font-semibold text-white'>Try it free 7 days</span> then $20/mo. thereafter</p>
                    </div>
                    <div className='bg-color-blue/30 -mt-1 mb-4 h-2.5 rounded-b-lg'></div>
                    <TrialSignUpForm />
                </div>
            </div>
        </section>
    )
}
