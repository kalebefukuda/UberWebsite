import React from 'react'
import { Signal, CarFront, KeySquare } from 'lucide-react';

const HeroCall = () => {
    return (
    <main className='bg-uber bg-no-repeat bg-cover bg-left sm:py-10'>
        
        <div className='w-full max-w-7xl mx-auto flex'>
            <section className='bg-white max-w-lg w-full md:mx-2 md:my-2'>
                <div className='bg-slate-100 flex w-full items-center justify-between'>
                    <section className='flex-1 pt-3 flex flex-col items-center justify-center gap-2'>
                        <Signal size={36} strokeWidth={2.5} />
                        <span className='text-center font-medium'>Faça viagens ou entregas</span>
                        <span className='w-full bg-black h-[1.5px]'></span>
                    </section>

                    <section className='flex-1 pt-3 flex flex-col items-center justify-center gap-2'>
                        <CarFront size={32} strokeWidth={2.5} />
                        <span className='text-center font-medium'>Viajar</span>
                    </section>

                    <section className='flex-1 pt-3 flex flex-col items-center justify-center gap-2'>
                        <KeySquare size={32} strokeWidth={2.5} />
                        <span className='text-center font-medium'>Alugue seus carros</span>
                    </section>
                </div>

                <div className='flex flex-col gap-5 px-4 my-4 text-left'>
                    <h1 className='font-bold text-4xl max-w-sm'>Assuma o comando e ganhe</h1>
                    <p className='max-w-sm'> Dirija na plataforma com a maior rede de usuários ativos</p>
                    <button className="bg-black self-start text-white px-6 py-2 rounded-lg font-medium hover:scale-5 duration-200">
                        Cadastre-se para digirir</button>

                    <a href="#"
                    className='text-gray-700 mt-7 mb-4 border-b-2 self-start hover:border-gray-700 duration-200'>
                        Saiba mais sobre como dirigir e fazer entregas
                        </a>
                </div>
            </section>
        </div>
</main>
    
  )
}

export default HeroCall