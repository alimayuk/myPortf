import React from 'react'

const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='aboutTitle'>ABOUT ME</h1>
      <div className='aboutAll flex'>
      
      <div className="skills">
        <h3>Front-End</h3>
        <ul>
          <li className='s'>JavaScript</li>
          <li className='s'>React</li>
          <li className='s'>CSS</li>
          <li className='s'>Bootstrap</li>
          <li className='s'>SASS/SCSS</li>
        </ul>
      </div>
      <div className="skills">
      <h3>Back-End</h3>
        <ul>
          <li className='s'>Node</li>
        </ul>
      </div>
      <div className="skills">
          <h3>Databases</h3>
          <ul>
            <li className='s'>MSSQL</li>
            <li className='s'>MongoDB</li>
          </ul>
        </div>
      <div className="skills">
        <h3>Versions</h3>
        <ul>
          <li className='s'>Github</li>
          <li className='s'>GitLab</li>
        </ul>
        </div>
      </div>
      </div>
  )
}

export default About