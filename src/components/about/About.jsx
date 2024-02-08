import React from 'react'
import { UsersRound , ClipboardList, Home } from 'lucide-react';


const About = () => {
  return (
    <section className='w-full px-2 py-8 sm:py-11 '>
        <div className='w-full max-w-7xl mx-auto grid grid-cols-1 text-start gap-10 sm:grid-cols-3'>
            <article className='flex flex-col gap-4 '>
            <UsersRound size={32} strokeWidth={2.5} />
            <h2 className='font-bold text-xl'> Quem somos</h2>
            <p>
              Find out how we started, what drives us, and how we’re reimagining how the world moves.
            </p>
            <a href="#" className=' text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400
              hover:text-black duration-200'>Saiba mais sobre a Uber</a>
            </article>

            <article className='flex flex-col gap-4 '>
            <ClipboardList size={32} strokeWidth={2.5} />
            <h2 className='font-bold text-xl'> Newsroom</h2>
            <p>
              Confira as notícias mais recentes sobre lançamentos, iniciativas e parcerias.
            </p>
            <a href="#" className=' text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400
              hover:text-black duration-200'>Acesse o Newsroom</a>
            </article>

            <article className='flex flex-col gap-4 '>
            <Home size={32} strokeWidth={2.5} />
            <h2 className='font-bold text-xl'> Cidadania global</h2>
            <p>
              Leia sobre nosso compromisso de gerar um impacto positivo nas cidades que atendemos.
            </p>
            <a href="#" className=' text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400
              hover:text-black duration-200'>See our partnerships</a>
            </article>


        </div>

    </section>
  )
}

export default About