import React from 'react'
import imagemLogo from '../../assets/uberlogo.png'

const Header = () => {
    return (
        <div className='w-full bg-black h-20 px-2 '>
            <div className='h-20 w-full flex items-center justify-between max-w-7xl mx-auto'>
                <div className='flex items-center'>
                <img src={imagemLogo} alt="Logo do Uber" className='w-20 mr-7' />

                <nav className='hidden sm:flex items-center gap-5'>
                    <a href="#" className=' text-white font-medium hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500'>Company</a>
                    <a href="#" className=' text-white font-medium hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500'>Safety</a>
                    <a href="#" className=' text-white font-medium hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500'>Help</a>
                </nav>
                </div>

                <div className='text-white font-medium flex items-center gap-4'>
                    <a href="#"> Login</a>
                    <a href="#" className='bg-white text-black px-3 py-1 rounded-full'> Sign up</a>
                </div>
            </div>
            
        </div>
    )
}

export default Header