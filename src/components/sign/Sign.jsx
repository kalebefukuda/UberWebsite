import React from 'react'
import { ArrowRight } from 'lucide-react'

const Sign = () => {
  return (
    <section className='w-full px-2 py-8 sm:py-11'>
        <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5'>
            <a href="#" className='flex items-center w-full justify-between
                                        border-b-[1.5px] border-gray-950 py-6 hover:text-zinc-800 duration-200'>
                <h2 className='font-bold text-3xl lg:text-4xl max-w-xs text-start'>Cadastre-se para dirigir</h2>
                <ArrowRight size={32} strokeWidth={2.5} />
            </a>

            <a href="#" className='flex items-center w-full justify-between
                                        border-b-[1.5px] border-gray-950 py-6 hover:text-zinc-800 duration-200'>
                <h2 className='font-bold text-3xl lg:text-4xl max-w-xs text-start'>Cadastre-se para viajar</h2>
                <ArrowRight size={32} strokeWidth={2.5} />
            </a>
        </div>

    </section>
  )
}

export default Sign