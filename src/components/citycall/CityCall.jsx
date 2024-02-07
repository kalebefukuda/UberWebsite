import React from 'react'

const CityCall = () => {
  return (
    <div>
        <section className='w-full py-8 bg-city bg-no-repeat bg-cover bg-right px-2'>  
            <div className='w-full max-w-7xl mx-auto flex flex-col gap-5'>
                <h1 className='text-3xl lg:text-4xl font-bold w-full max-w-2xl'>
                    A plataforma Uber que você conhece, reinventada para empresas
                </h1>
                <p className='font-medium text-sm max-w-2xl md:text-base'>
                Uma plataforma simples para empresas de todos os portes administrarem suas viagens e refeições globais e entregas locais.
                </p>
                <button className="bg-black text-white self-start px-6 py-2 font-medium rounded-lg hover:scale-105 duration-200 ">Começar</button>
            </div>
        </section>
    </div>
  )
}

export default CityCall