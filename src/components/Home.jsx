import React from 'react'
import { TrialSignUpForm } from './TrialSignUpForm'

export const Home = () => {
    return (
        <section className='w-3/4'>
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col px-4 gap-8'>
                    <h1 className='text-5xl font-semibold leading-[54px] text-white'>Learn to code by watching others</h1>
                    <p className='text-white'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                        but understanding how developers think is invaluable.</p>
                </div>
                <div>
                    <TrialSignUpForm />
                </div>
            </div>
        </section>
    )
}
