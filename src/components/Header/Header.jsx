import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

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
                    <a href="">
                        Filhotes
                    </a>
                    <a href="">Sobre Nós</a>
                    <a href="">Contato</a>

                    <button className="button">
                        <a href="">Reservar Filhote</a>
                    </button>
            </div>
                
            </OutsideClickHandler>

            


            <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>(!prev))}>
                <BiMenuAltRight size={30} />
            </div>
        </div>
        

        
    </section>
  )
}

export default Header