import React, { useRef } from 'react'
import './contact.css'
import email from '../img/email.png'
import phone from '../img/phone.png'
import address from '../img/address.png'
import emailjs from '@emailjs/browser';
import { useState } from 'react'

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault()


        emailjs.sendForm('service_7idp9vg', 'template_t9tg4m1', formRef.current, 'user_VmoRWgHDKbVn4vYsPNddj')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }


  return (
    <div className="mt-4 pt-3">
      <div className="row justify-content-center">
          <div className="col-lg-5 mx-2 ">
              <h1 className="discuss">Any queries? Feel free to contact</h1>
                <hr />
                <img src={email} alt="email" className="low-res" /> luckyjain7247@gmail.com <br />  <br />
                <img src={phone} alt="phone" className="low-res" /> +91 7247064715 <br /> <br />
                <img src={address} alt="address" className="low-res" /> Vidisha, Madhya Pradesh, India (464001)

          </div>
          <div className="col-lg-5 mx-2 pt-3">
            <div className="text-center">
                <h5><b>Do you have an amazing idea?</b> I am always available to turn your ideas into reality.</h5>
            </div>
            <div className="form mt-5">
            <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="user_name" required placeholder='Enter your name' className="input" /> <br />
            <input type="text" name="user_subject" required placeholder='Enter subject' className="input" /> <br />
            <input type="email" name="user_email" required placeholder='Enter your email' className="input" /> <br />
            <textarea name="user_query" placeholder='Enter your query' id="" cols="30" rows="5" className="text-area"></textarea>
            <button className=" btn btn-primary rounded-pill bg-gradient">Submit</button> <br /> <br />
            {done && <div className="alert alert-primary" role="alert">Thank you for contacting. We will reach out to you soon.</div>}
            </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
