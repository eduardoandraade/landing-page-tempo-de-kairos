import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './About.css'
import data from '../../utils/accordion'

const About = () => {
  return (
    <section className="a-wrapper">
        <div className="paddings innerWidth flexCenter a-container">
            
            {/* Left Side */}
            <div className="a-left">
                <div className="image-container">
                    <img src="./about.png" alt="" />
                </div>
            </div>

            {/* Right Side */}
            <div className="flexColStart a-right">

                <span className='orangeText' >Sobre nós</span>
                <span className='primaryText'>Canil Tempo de Kairós</span>
                <span className='secondaryText'>Nos dedicamos a criar um espaço excepcional para os nossos Rottweilers, 
                    <br />garantindo que recebam cuidados, treinamento adequado e um ambiente saudável. 
                    Conte conosco para encontrar o Rottweiler perfeito para a sua família.
                </span>

                <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item, i)=> {
                                const [className, setClassName] = useState(null)
                            
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={1} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">

                                        <AccordionItemState>
                                            {({expanded})=> 
                                            expanded 
                                            ? setClassName("expanded")
                                            : setClassName("collapsed")
                                            }
                                        </AccordionItemState>

                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel> 
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
           
           
           
            </div>
        </div>
    </section>
  )
}

export default About