import React from 'react'

export default function contact() {
  return (
    <>
    {/* contact section start */}
  <section className="contact" id="contact">
    <div className="contact-text">
      <h2>Contact <span>Me</span></h2>
      <h4>Let's work Together</h4>
      <p>
        Need beautiful, fully functional, easy to use websites? I am a web
        designer, and I create web design for you according to your
        requirement in a way that your business can stand out online. From
        entire site builds from scratch, redesigns of your existing site, or
        anything in between, I can take your vision to reality. Reach out to
        me now and let's makers something awesome together.
      </p>
      <div className="contact-list">
        <li>
          <i className="fa-solid fa-paper-plane" style={{"color":"#fff"}} />vikashtailor2512@gmail.com
        </li>
        <li>
          <i className="fa-solid fa-phone" style={{"color":"#fff"}} />8740865154
        </li>
      </div>
      <div className="contact-icons">
        <a href="https://wa.me/qr/PYZHUXMWVU2RC1"><i className="fa-brands fa-whatsapp" /></a>
        <a href="https://www.instagram.com/vikash.tailor01?igsh=MWV2eTE3OXRrNG9zMw=="><i className="fa-brands fa-instagram" /></a>
        <a href="https://www.linkedin.com/in/vikash-tailor-13a6b32b9"><i className="fa-brands fa-linkedin" /></a>
      </div>
    </div>
    <div className="contact-form">
      <form action>
        <input type placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter your Email" required />
        <input type placeholder="Enter your subject" />
        <textarea name id cols={40} rows={10} placeholder="Enter your Massege" defaultValue={""} />
        <input type="submit" defaultValue="Submit" className="send" />
      </form>
    </div>
  </section>
  
    </>
  )
}
