import React from 'react'
import profil from "../../assets/profil.jpg"
import {PiHandWavingThin} from "react-icons/pi"
import {BsArrowUpRight} from "react-icons/bs"
const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className="card">
        <img src={profil} alt="profil resimi" className='profilImg' />
        <p className='cardDesc'>Hi, I'm Ali Mayuk <PiHandWavingThin/> </p>
        <h2 className='cardH2'>I am a frontend web developer, passionate about creating user-friendly and impactful web experiences.</h2>
        <a href='https://github.com/puply' target='_blank'><button className='profBtn'>GitHub <BsArrowUpRight/></button></a>
        </div>
    </div>
  )
}

export default Hero