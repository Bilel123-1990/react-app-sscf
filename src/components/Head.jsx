import React from 'react'
import "./header.css"
import img1 from '../images/sscf.jpg'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSB">
                <div className='logo'>
                  <a href='#'>  <img src={img1} alt="" className='image1' /></a>
                   
                 </div>

                 <div className='social'>
                 <i className="fa-brands fa-facebook icon"></i>
                 <i className="fa-brands fa-instagram icon"></i>
                 <i className="fa-brands fa-facebook icon"></i>
                 <i className="fa-brands fa-instagram icon"></i>
                 </div>
            </div>

        </section>
    </>
  )
}

export default Head