import React from 'react'
import './intrn.css';
import Videobg from '../assets/Videos/vidauto.mp4'

export default function Video() {
  return (
    <div className='videocene'>
        <video src={Videobg} autoPlay loop muted/>              
    </div>
  )
}
