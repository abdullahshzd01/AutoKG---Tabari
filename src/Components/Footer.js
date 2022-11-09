import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "60vh",
    width: "100%",
    backgroundColor: "#A19999"
  }

  return (
    <>
      <footer className='text-light py-4' style={footerStyle}>
        <p className="text-center">
          Copyright &copy; tabari.com
        </p>
      </footer>
    </>
  )
}