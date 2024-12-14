import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <>
    <h2>TODOS LOS DERECHOS RESERVADOS  ©<span id="currentYear">{currentYear}</span></h2>
    </>
  )
}

export default Footer