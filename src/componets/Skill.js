import React from 'react'

export default function Skill() {
  return (
    <>
    {/* skill section start */}
  <h1 className="sub-title">My <span>Skills</span></h1>
  <section className="skill-container1">
    <div className="container1" id="skills">
      <h1 className="heading1">Technical Skills</h1>
      <div className="technical-bars">
        <div className="bar">
          <i className="fa-brands fa-html5" style={{"color":"#c95d2e"}} />
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line html">
            <span />
          </div>
        </div>
        <div className="bar">
          <i className="fa-brands fa-css3" style={{"color":"#147bbc"}} />
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css">
            <span />
          </div>
        </div>
        <div className="bar">
          <i className="fa-brands fa-js" style={{"color":"#b0bc1e"}} />
          <div className="info">
            <span>JavaScript</span>
          </div>
          <div className="progress-line JavaScript">
            <span />
          </div>
        </div>
      </div>
    </div>
    <div className="container1">
      <h1 className="heading1">Professional Skills</h1>
      <div className="radial-bars">
        <div className="radial-bar">
          <svg x="0px" y="0px" viewBox="0 0 200 200">
            <circle className="progress-bars" cx={100} cy={100} r={80} />
            <circle className="path path-1" cx={100} cy={100} r={80} />
          </svg>
          <div className="percentage">90%</div>
          <div className="text">Creativity</div>
        </div>
        <div className="radial-bar">
          <svg x="0px" y="0px" viewBox="0 0 200 200">
            <circle className="progress-bars" cx={100} cy={100} r={80} />
            <circle className="path path-2" cx={100} cy={100} r={80} />
          </svg>
          <div className="percentage">50%</div>
          <div className="text">Communication</div>
        </div>
        <div className="radial-bar">
          <svg x="0px" y="0px" viewBox="0 0 200 200">
            <circle className="progress-bars" cx={100} cy={100} r={80} />
            <circle className="path path-3" cx={100} cy={100} r={80} />
          </svg>
          <div className="percentage">70%</div>
          <div className="text">Problem Solving</div>
        </div>
        <div className="radial-bar">
          <svg x="0px" y="0px" viewBox="0 0 200 200">
            <circle className="progress-bars" cx={100} cy={100} r={80} />
            <circle className="path path-4" cx={100} cy={100} r={80} />
          </svg>
          <div className="percentage">75%</div>
          <div className="text">Teamwork</div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
