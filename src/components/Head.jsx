import React from 'react'
import "./header.css"
import img1 from '../images/sscf.jpg'

import { useTranslation } from 'react-i18next';

const Head = () => {
  const { t, i18n } = useTranslation();



   function handleClick(lang){
    i18n.changeLanguage(lang);
    console.log(lang);

   }
   


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
                 {/* <button onClick={()=>handleClick('eng')} className='en'>English</button>
                 <button onClick={()=>handleClick('frr')} className='en'>Francais</button> */}
                 </div>
            </div>

        </section>
    </>
  )
}

export default Head