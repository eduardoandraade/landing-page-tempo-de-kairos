import React from 'react'
import './Partnerships.css'

const Partnerships = () => {
  return (
    <section className="p-wrapper">
        <div className="paddings innerWidth p-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Quer ser nosso parceiro?</span>
                <span className='secondaryText'>Estamos sempre em busca de parcerias incríveis! Se você deseja colaborar conosco, compartilhar ideias
                    <br />e fazer parte da família Tempo de Kairós, envie sua proposta para o nosso e-mail!
                </span>
                <button className="button">
                    <a href="mailto:eduardoandraade@outlook.com">Enviar proposta</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Partnerships