import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';


const Contact = () => {


  return (
    <div className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            
            {/* Left Side */}
            <div className="flexColStart c-left">
                <span className='orangeText' >Contatos</span>
                <span className='primaryText'>Fale Conosco Facilmente</span>
                <span className='secondaryText'>Queremos ouvir você! Nossa equipe está pronta para atender todas as suas perguntas, fornecer informações detalhadas sobre nossos serviços e ajudá-lo a encontrar o companheiro canino perfeito para sua família.</span>
            
                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexColCenter mode">
                            <div className="flexStart contacts">
                                <div className="flexCenter icon">
                                    <MdCall size={23} />
                                </div>
                                <div className="flexColCenter detail">
                                        <span className='primaryText'>Telefone</span>
                                        <span className='secondaryText'>&#40;98&#41; 9 8224-9599 </span>
                                </div>
                                <div className="flexCenter button" onClick={() => window.open('tel:9898224-9599')}>Ligue Agora</div>
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart contacts">
                                <div className="flexCenter icon">
                                    <FaWhatsapp size={23} />
                                </div>
                                <div className="flexColCenter detail">
                                        <span className='primaryText'>What'sApp</span>
                                        <span className='secondaryText'>98 98787-9820</span>
                                </div>
                                <div className="flexCenter button">
                                    <a target="_blank" rel="noopener noreferrer"
                                    href="https://api.whatsapp.com/message/JGS633CVEWI6H1?autoload=1&app_absent=0">
                                    Enviar mensagem
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="flexColCenter mode">
                            <div className="flexStart contacts">
                                <div className="flexCenter icon">
                                    <FaInstagram size={23} />
                                </div>
                                <div className="flexColCenter detail">
                                        <span className='primaryText'>Instagram</span>
                                        <span className='secondaryText'>@caniltempodekairos</span>
                                </div>
                                <div className="flexCenter button">
                                    <a target="_blank" rel="noopener noreferrer"
                                    href="https://www.instagram.com/caniltempodekairos/">
                                    Acesse
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            
            </div>

            {/* Right Side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact