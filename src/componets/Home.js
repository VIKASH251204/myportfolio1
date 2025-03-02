import React from 'react'

export default function Home() {
  return (
    <>
  <div className="home" id="home">
    <div className="home-info">
      <h1>Vikash Tailor</h1>
      <h2>
        I'm a 
        <span style={{"--i":"3"}} data-text=" Frontend Developer">Frontend Developer</span>
        <span style={{"--i":"2"}} data-text=" Web Designer">Web Designer</span>
        <span style={{"--i":"1"}} data-text=" Web Developer">Web Developer</span>
      </h2>
      <p>
        My Name is Vikash Tailor, I have done Frontend Developer course from
        Jaipur, in which I have learned HTML, CSS, JavaScript and
        React.js(basic).
      </p>
      <div className="btn-sci">
        <a href="Vikashcv.pdf" download="CVdownload" className="btn">Download CV</a>
        <div className="sci">
          <a href="https://github.com/VIKASH251204"><i className="fa-brands fa-github" /></a>
          <a href="https://www.linkedin.com/in/vikash-tailor-13a6b32b9"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://www.instagram.com/vikash.tailor01?igsh=MWV2eTE3OXRrNG9zMw=="><i className="fa-brands fa-instagram" /></a>
          <a href="https://wa.me/qr/PYZHUXMWVU2RC1 "><i className="fa-brands fa-whatsapp" /></a>
        </div>
      </div>
    </div>
    <div className="home-img">
      <div className="img-box">
        <div className="img-item">
          <img src="home.png" alt=''/>
        </div>
      </div>
    </div>
  </div>
  
  
    </>
  )
}
