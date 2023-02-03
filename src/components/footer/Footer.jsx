import React from 'react'
import './footer.css'
import { blog } from '../../dummydata'

const footer = () => {
  return (
    <div>
        <section className='newletter'>
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter stay tune and get the lasted update</h1>
                    <span>far far away, behind the word mountains</span>
                </div>
                <div className="right row">
                    <input type="text" placeholder='ENter email adress' />
                    <i className='fa fa-paper-palne'></i>

                </div>
            </div>

        </section>

      <footer>
        <div className='container padding'>
            <div className="box logo">
                <h1>SSCF</h1>
                <span>Centre de formation professionnel</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim.</p>
                <i className="fa-brands fa-facebook icon"></i>
                 <i className="fa-brands fa-instagram icon"></i>
                 <i className="fa-brands fa-facebook icon"></i>
                 <i className="fa-brands fa-instagram icon"></i>
            </div>
            <div className="box link">
                <h3>Lien rapide</h3>
                <ul>
                    <li>About US</li>
                    <li>About US</li>
                    <li>About US</li>
                    <li>About US</li>
                    <li>About US</li>
                </ul>
            </div>
            <div className="box">
                <h3>Post récent</h3>
                {blog.slice(0.3).map((val)=>{
                    return(
                    <div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">                            
                        <span>
                            <i className='fa fa-user'></i>
                            <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                            <i className='fa fa-calendar-alt'></i>
                            <label htmlFor="">{val.date}</label>
                        </span>
                        <h4>{val.title}</h4>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="box last">
                <h3>Vos question Ici</h3>
                <ul>
                    <li>
                        <i className='fa fa-map' ></i>
                        111, Loli st ,Mount View. California
                    </li>
                    <li>
                        <i className='fa fa-phone-alt'></i>
                        +216   2112 21212
                    </li>
                    <li>
                        <i className='fa fa-paper-plane'></i>
                        example@gmail.comw
                    </li>
                </ul>
            </div>
        </div>
      </footer>
        <div className="legal">
            <p>Copyright All rights reserved| This template is made <i className='fa fa-heart'></i> By Gorge Armani</p>
        </div>
    </div>
  )
}

export default footer