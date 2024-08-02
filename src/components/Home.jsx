import { TrialSignUpForm } from './TrialSignUpForm'

export const Home = () => {
    return (
        <section className='md:w-3/4'>
            <div className='grid md:grid-cols-2 mb-16 md:mb-0'>
                <div className='flex flex-col px-4 justify-center gap-6'>
                    <h1 className='text-3xl font-semibold text-center mt-16 mx-8 md:mt-0 md:mx-0 md:text-left md:text-5xl md:leading-[50px] text-white'>Learn to code by watching others</h1>
                    <p className='text-white/90 text-center mx-4 leading-6 md:text-left md:mx-0'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                        but understanding how developers think is invaluable.</p>
                </div>
                <div className='flex flex-col mx-6 mt-14 md:mt-0 md:ml-10'>
                    <div className='bg-color-blue text-center py-4 px-16 md:px-0 rounded-lg'>
                        <p className='text-sm text-color-grayish-blue leading-6 md:leading-none'><span className='font-semibold text-white'>Try it free 7 days</span> then $20/mo. thereafter</p>
                    </div>
                    <div className='bg-color-blue/30 -mt-1 mb-4 h-2.5 rounded-b-lg'></div>
                    <TrialSignUpForm />
                    <div className='bg-color-blue/30 -mt-1 mb-4 h-3 rounded-b-lg'></div>
                </div>
            </div>
        </section>
    )
}
