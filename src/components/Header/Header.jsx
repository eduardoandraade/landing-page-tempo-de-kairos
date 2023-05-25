import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddigns innerWidth h-container">
            <a href="#">
                <img src="./logo.svg" alt=""  width={65}/>
            </a>

            <div className="flexCenter h-menu">
                <a 
                    href=""
                >
                    Filhotes
                </a>
                <a href="">Sobre Nós</a>
                <a href="">Galeria</a>
                <a href="">Depoimentos</a>

                <button className="button">
                    <a href="">Contato</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header