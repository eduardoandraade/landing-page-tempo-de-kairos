import React from "react";
import "./Hero.css";
import { HiOutlineChevronRight } from "react-icons/hi";
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
                        Tempo de Kairós
                    </h1>
                    <h2>Rottweiler Leais e Protetores</h2>
                </div>

                <div className="flexColStart hero-description">
                    <span className="descriptionText">Faça parte da nossa família Canil Tempo de Kairós,</span>
                    <span className="descriptionText">aqui você encontra Rotweillers conhecidos por sua lealdade e beleza.</span>
                </div>

                <div className="flexCenter search-bar">
                    <span className="ctaText">RAÇA PURA, COM A MELHOR GENÉTICA ALEMÃ</span>
                    <HiOutlineChevronRight color="black" size={23} />
                    <button className="button">
                        <a href="https://api.whatsapp.com/message/JGS633CVEWI6H1?autoload=1&app_absent=0">
                            CHAME NO WHATSAPP</a>
                    </button>
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