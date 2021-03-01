import React from 'react'

function navbar() {
    return (
        <nav>
            <a href="#" className="logo">
                MSH!
            </a>

            <input className="menu-buttons" type="checkbox"/>
            ,<label className = "menu-icon" for="menu-buttons">
              <span className="nav-icon"></span>
              </label>  


              <ul className="menu">
              
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Resume</a></li>
                  {/* <li><a href="#">Education</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li> */}
                  
              </ul>
              <a href="#" className="Hi">Hi!</a>

              </nav>
    )
}

export default navbar
