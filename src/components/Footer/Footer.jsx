import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <section className="f-wrapper">
        
        <div className="paddings flexCenter innerWidth f-container">

         {/* left side */}
         <div className="flexColStart f-left">
            <img src="./logo.svg" alt="Logo Canil Tempo de Kairos" width={90}/>

            <span className='secondaryText'>
            Canil Tempo de Kairós,<br />
            especialistas em Rottweilers.
            </span>            
         </div>


         {/* right side*/}

         <div className="f-right flexColStart">
          <span className='primaryText'>Informações</span>
          <span className='secondaryText'>São Luis &#8212; Maranhão</span>
          <span className='secondaryText'>Enviamos para todo Brasil</span>

          <span className='secondaryText'>&#169; Developed by <a 
          href="https://www.linkedin.com/in/eduardo-andrade-17a53118a/">
          Eduardo Andrade</a></span> 
          </div>

            
        </div>
    </section>

  )
}

export default Footer