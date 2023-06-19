import React from "react";
import "./Hero.css";
import { HiOutlineChevronRight } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle">

                    </div>
                    <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                    >
                        Canil <br /> 
                        Tempo de Kairós
                    </motion.h1>
                    <motion.h2
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                    >
                        Rottweiler Leais e Protetores</motion.h2>
                </div>

                <div className="flexColStart hero-description">
                    <span className="descriptionText">Faça parte da nossa família Canil Tempo de Kairós,</span>
                    <span className="descriptionText">aqui você encontra Rotweillers conhecidos por sua lealdade e beleza.</span>
                </div>

                <div className="flexCenter search-bar">
                    <span className="ctaText">Raça pura, com a melhor génetica alemã!</span>
                    <HiOutlineChevronRight className="iconSet" color="black" size={23} />
                    <button className="button">
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://api.whatsapp.com/message/JGS633CVEWI6H1?autoload=1&app_absent=0">
                            Entrar em contato</a>
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
                <motion.div
                initial={{x: "5rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 3,
                    type: "spring"
                }}
                className="image-container">
                    <img src="./hero-image.png" alt="Imagem principal de um Cachorro da raça Rottweiler" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero