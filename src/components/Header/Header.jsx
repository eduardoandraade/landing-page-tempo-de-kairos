import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <a href="#">
                <img src="./1.png" alt=""  width={65}/>
            </a>

            <div className="flexCenter h-menu">
                <a  className="nav-link" 
                    href=""
                >
                    Filhotes
                </a>
                <a className="nav-link" href="">Sobre Nós</a>
                <a className="nav-link" href="">Contato</a>

                <button className="button">
                    <a href="">Lista de Espera</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header