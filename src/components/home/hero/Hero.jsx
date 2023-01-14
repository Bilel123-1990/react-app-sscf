import React from 'react'
import './hero.css'
import video1 from '../../../images/video.mp4'

const Hero = () => {
  return (
    <div>
      <video src={video1} autoPlay loop muted  />
        <section className='hero'>
          <div className="container">
            <div className="row">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ducimus officiis doloribus, cum temporibus odio excepturi similique itaque voluptatibus totam eligendi nulla? Sit nam temporibus quia laudantium, voluptate at dolore.
              Est quas neque officiis ea vero quibusdam odio, soluta nisi sint blanditiis veritatis eveniet vitae veniam, numquam consectetur? Deleniti est autem beatae quia accusamus odit aliquid expedita, nam repellendus facilis!
              i, ipsam blanditiis odit nostrum nobis voluptates ipsa eius consequuntur nisi? Ullam mollitia ea ex molestias deserunt perferendis quisquam facilis voluptates voluptatum. Fugiat vitae velit totam id recusandae!
            </p>
            <div className="button">
              <button className='primary-btn'>
              COMMENCEZ MAINTENANT<i class="fa-solid fa-right-long"></i>
              </button>
              <button>
              VOIR LE COURS<i class="fa-solid fa-right-long"></i>
              </button>
            </div>
            </div>

          </div>
        </section>
        <div className="margin">

        </div>
    </div>
  )
}

export default Hero