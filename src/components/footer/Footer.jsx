import React from 'react'
import imagemLogo from '../../assets/uberlogo.png'
import Playstore from '../../assets/playstore.png'
import AppleStore from '../../assets/lojapple.png'

const Footer = () => {
  return (
    <footer className='w-full  py-12 sm:py-11 bg-black flex flex-col justify-center items-center gap-4'>
            <img src={imagemLogo} alt="logo da Uber" className='w-[8rem]' />
            <span className='text-white'>@kalebefukuda</span>
            <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
                <a href="#" className='w-full flex items-center justify-center'>
                <img src={Playstore} alt="Link da Playstore"  className='w-2/3 sm:w-full'/>
                </a>
                
                <a href="#" className='w-full flex items-center justify-center'>
                <img src={AppleStore} alt="Link da AppleStore"  className='w-2/3 sm:w-full'/>
                </a>

            </div>
    </footer>
  )
}

export default Footer