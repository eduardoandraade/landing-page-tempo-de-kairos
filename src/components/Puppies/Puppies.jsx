import React from 'react'
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "./Puppies.css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'


const Puppies = () => {
  return (
    <section className='p-wrapper'>
        <div className="paddings innerWidth p-container">
            <div className="p-head flexColStart">
                <span className="orangeText">Faça parte da familia</span>
                <span className="primaryText">Filhotes Tempo de Kairos</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
              {
                  data.map((card, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="flexColStart p-card">
                          <img src={card.image} alt="home" />

                          
                            <span>{card.price}</span>
                         

                          <span className="primaryText">{card.name}</span>
                          <span className="secondaryText">{card.detail}</span>

                        </div>
                    </SwiperSlide>
                    )
                    
                  })
              }
            </Swiper>
        </div>
    </section>
  )
}

export default Puppies

const SliderButtons = ()=> {
  const swiper = useSwiper();
  return (
    <div className="flexCenter p-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}