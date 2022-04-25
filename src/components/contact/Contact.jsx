import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>rengifoym@gmail.com</h5>
            <a href="mailto:rengifoym@gmail.com" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Junior Dev</h5>
            <a href="https://m.me/mauricio_armany" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+573106868699</h5>
            <a href="https://api.whatsapp.com/send?phone=+573106868699" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>
        {/* aqui termina las opciones de contacto */}
        <form action="">
          <input type="text" name="name" placeholder="You Full Name" required />
          <input type="email" name="email" placeholder="You Email" required />
          <textarea name="message" rows="7" placeholder="You Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default contact