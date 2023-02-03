import React from 'react'
import Title from "../title/Title"
import { homeAbout } from "../../dummydata"
import AWrapper from './AWrapper'
import '../about/about.css'
import img1 from '../../images/about.webp'


const AboutCard = () => {
  return (
    <div>
        <section className='aboutHome'>
          <div className="container flexSB">
            <div className='left row'>
              <img src={img1} alt="" />
            </div>
            <div className='right row'>
             <Title subtitle='TOUT APPRENDRE' title="À propos de l'apprentissage en ligne"/>
             <div className='items'>
              {homeAbout.map((val) => (
             <div className='item flexSB'>
              <div className='img'>
                  <img src={val.cover} alt="" />
              </div>
              <div className='text'>
                <h2>{val.title}</h2>
                <h2>{val.desc}</h2>
              </div>
             </div>
             ))}</div>
            </div>
          </div>
        </section>
        <AWrapper/>
    </div>
  )
}

export default AboutCard