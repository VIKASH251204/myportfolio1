import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
    <a href="/" className="logo">Portfolio</a>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li> 
      <li><a href="#service">Service</a></li>
      <li><a href="#skills">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>  
  </nav>

  {/* toggle mode */}
  <nav className="navbar bg-body-#1F242D fixed-top" id='toggle-menu' >
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:'white', fontSize:'30px', fontWeight:'700'}} href="/">Portfolio</a>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header" style={{backgroundColor:'#1F242D', color:'white'}}>
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body"  style={{backgroundColor:'#1F242D'}}>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{display:'flex'}}>
        <li style={{marginTop:'20px'}}><a href="#home">Home</a></li>
        <li style={{marginTop:'20px'}}><a href="#about">About</a></li> 
        <li style={{marginTop:'20px'}}><a href="#service">Service</a></li>
        <li style={{marginTop:'20px'}}><a href="#skills">Portfolio</a></li>
        <li style={{marginTop:'20px'}}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
  )
}
