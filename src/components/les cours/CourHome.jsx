import React from 'react'
import Back from '../back/Back'
import CourCard from './CourCard'
import CourOnline from './CourOnline'

const CourHome = () => {
  return (
    <div>
      <Back title="Explorer Les Cours" />
      <CourCard />
      <CourOnline/>
    </div>
  )
} 

export default CourHome
