import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import './Header.css'


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }


  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <a href="#">
                <img src="./1.png" alt=""  width={65}/>
            </a>

            <OutsideClickHandler
            onOutsideClick={() => {
                setMenuOpened(false)
            }}
            >
            <div className="flexCenter h-menu"
                    style={getMenuStyles(menuOpened)}
                >
                    
                       
                    
                    <a href="#puppies-section">Filhotes</a>
                    <a href="#about">Sobre Nós</a>
                    <a href="#contact">Contato</a>

                    <button className="button">
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://api.whatsapp.com/message/JGS633CVEWI6H1?autoload=1&app_absent=0">
                            Reservar Filhote</a>
                    </button>
            </div>
                
            </OutsideClickHandler>

            


            <div className="menu-icon" onClick={()=> setMenuOpened(!menuOpened)}>
                <BiMenuAltRight size={30} />
            </div>
        </div>
        

        
    </section>
  )
}

export default Header