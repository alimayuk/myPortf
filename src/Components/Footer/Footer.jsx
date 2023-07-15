import React from 'react'
import {BiLogoInstagramAlt,BiLogoLinkedinSquare,BiLogoDiscordAlt} from "react-icons/bi" 

const Footer = () => {
  return (
    <div className='footer '>
      <hr />
      <div className='container'>
      <p>© 2023 All rights reserved.</p>
      <div className='social_Links'>
        <a className='socialBtn' target='_blank' href="https://www.linkedin.com/in/alimayuk22/"><BiLogoLinkedinSquare/></a>
        <a className='socialBtn' target='_blank' href="https://www.instagram.com/alimayukk/?next=%2F"><BiLogoInstagramAlt/></a>
        <a className='socialBtn' target='_blank' href="https://discordapp.com/users/319384861116858368"><BiLogoDiscordAlt/></a>
      </div>
      </div>
     

    </div>
  )
}

export default Footer