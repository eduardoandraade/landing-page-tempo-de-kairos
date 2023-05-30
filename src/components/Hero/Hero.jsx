import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle">

                    </div>
                    <h1>
                        Canil <br /> 
                        Tempo de Kairos
                    </h1>
                    <h2>Rotewaillers Leais e Protetores</h2>
                </div>

                <div className="flexColStart hero-description">
                    <span className="descriptionText">Faça parte da nossa família Canil Tempo de Kairos,</span>
                    <span className="descriptionText">aqui você encontra Rotweillers conhecidos por sua lealdade e beleza.</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <span className="ctaText">serviços | agendar visita | dúvidas</span>
                    <button className="button">Entrar em contato</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={0} end={17} duration={4} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Filhotes</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={0} end={15} duration={2} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Clientes</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={0} end={5} duration={5} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Títulos</span>
                    </div>


                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="Imagem principal de um Cachorro da raça Rottweiler" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero