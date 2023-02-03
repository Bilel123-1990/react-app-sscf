import React from 'react'
import './contact.css'
import Back from '../back/Back'

const Contact = () => {
     const map='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2843.8255273009077!2d10.182880419280922!3d36.864355376945184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4e9df2298f%3A0x808a5740e560da0e!2sSSCF%20SAWSSEN!5e0!3m2!1sfr!2stn!4v1675107254801!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

  return (
    <div>
        <Back title='Contact Us'/>
        <section className='contact padding'>
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map}>  </iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, soluta!</p>
                    <div className='items grid2'>
                        <div className="box">
                            <h4>ADRESSE</h4>
                            <p>122 west 21 st street New York</p>
                        </div>
                        <div className="box">
                            <h4>Email:</h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>PHONE</h4>
                            <p>+123 3545 5554</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text"  placeholder='Name' />
                            <input type="email"  placeholder='Email' />
                        </div>
                        <input type="text" placeholder='Subject' />
                        <textarea  cols="30" rows="10">
                            Create A message here...                   
                         </textarea>
                         <button className='primary-btn'>SEND MESSAGE</button>
                    </form>
                    <h3>Follow us here</h3>
                    <span>FACEBOOK INSTAGRAM TWITTER</span>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Contact