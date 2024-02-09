import React from 'react'
import QrCode from '../../assets/qrcode1.png'
import QrCode2 from '../../assets/qrcode2.png'
import { ChevronRight } from 'lucide-react'

const Download = () => {
  return (
    <section className='w-full px-2 py-8 sm:py-11 bg-gray-300'>
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-4'>
            <h2 className='font-bold text-2xl text-start md:text-4xl'>É mais facil pelo app</h2>

            <div className='flex flex-col md:flex-row w-full gap-5 text-start'>
                <a href="#" className='flex w-full border-2 border-slate-300 px-4 py-6 bg-white items-center justify-between hover:shadow-lg duration-250'>
                    <div className='flex items-center'>
                        <img src={QrCode} alt="QRCode 1" className='hidden md:flex mr-4 w-1/3' />
                        <div>
                            <h3 className='font-bold text-xl'>Baixe o App </h3>
                            <span className='hidden md:block'> Leia o QR para baixar o app</span>
                        </div>
                    </div>
                    <ChevronRight size={32} strokeWidth={2.5}className='hover:scale-110 duration-200'/>
                </a>

                <a href="#" className='flex w-full border-2 border-slate-300 px-4 py-6 bg-white items-center justify-between hover:shadow-lg duration-250'>
                    <div className='flex items-center'>
                        <img src={QrCode2} alt="QRCode 2" className='hidden md:flex mr-4 w-1/3' />
                        <div>
                            <h3 className='font-bold text-xl'>Baixe o App de parceiro </h3>
                            <span className='hidden md:block'> Leia o QR para baixar o app</span>
                        </div>
                    </div>
                    <ChevronRight size={32} strokeWidth={2.5}className='hover:scale-110 duration-200'/>
                </a>

            </div>

        </div>

    </section>
  )
}

export default Download