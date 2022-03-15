import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar mi CV</a>
        <a href="#contact" className='btn btn-primary'>Escribime</a>
    </div>
  )
}

export default CTA