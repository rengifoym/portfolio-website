import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Now</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>1 Completed</small>
            </article>
          </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus nulla ut tempor luctus. 
            Proin est magna, iaculis in ipsum sed, fermentum pharetra sem. Nunc sodales quis quam ut maximus. 
            Nullam tempus aliquet semper. Morbi aliquet eget ante a bibendum. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      
      </section>
  )
}

export default About