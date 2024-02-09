import React from 'react'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'

const Blog = () => {
  return (
    <section className='w-full px-2  mx-auto py-8 sm:py-11 max-w-7xl'>
        <div className='w-full text-left flex flex-col max-w-7xl max-auto'>
            <h1 className="font-bold text-2xl max-w-2xl sm:text-4xl mb-6">
                Preocupados com a sua segurança, onde quer que você vá
            </h1>
            <div className='w-full flex flex-col sm:flex-row gap-4'>
                <a href="#" className='flex-1'>
                    <article className='flex flex-col gap-2'>
                        <img src={post1} alt="Imagem do post 1" className='opacity-80 hover:scale-95 hover:opacity-100 duration-200' />
                        <h2 className='font-bold text-lg'>
                            Sua segurança é a nossa prioridade
                        </h2>
                        <p className='text-stone-800'>Com todos os recursos de segurança e todas as normas do nosso Código da Comunidade Uber,
                            estamos comprometidos em ajudar a criar um ambiente seguro para nossos usuários.
                        </p>
                
                    </article>
                </a>
                <a href="#" className='flex-1'>
                    <article className='flex flex-col gap-2'>
                        <img src={post2} alt="Imagem do post 2" className='opacity-80 hover:scale-95 hover:opacity-100 duration-200' />
                        <h2 className='font-bold text-lg'>
                            Colocamos mais de 10.000 cidades em movimento
                        </h2>
                        <p className='text-stone-800'>
                            O app está disponível em milhares de cidades no mundo todo para que você possa 
                            solicitar uma viagem mesmo longe de casa.
                        </p>
                    </article>
                    </a>
            </div>
        </div>
    </section>
  )
}

export default Blog