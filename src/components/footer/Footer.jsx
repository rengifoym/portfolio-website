import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#a" className='footer__logo'>MAURO</a>

      <ul className='permalinks'>
        <li><a href="#a">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/"><FiInstagram/></a>
        <a href="https://twitter.com/?lang=es"><IoLogoTwitter/></a>
      </div> 
      <div className="footer__copyright">
        <small>&copy; Mauricio Dev JR, All rights reserved.</small>
      </div> 
    </footer>
  )
}

export default footer