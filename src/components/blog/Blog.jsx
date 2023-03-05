import React from 'react'
import Back from '../back/Back'
import BlogCard from './BlogCard'
import './blog.css'

const Blog = () => {
  return (
    <div>
        <Back title='Platforme Intelligente'/>

        <section className='blog padding'>
            <div className='container grid2'>
                <BlogCard/>
            </div>

        </section>
    </div>
  )
}

export default Blog