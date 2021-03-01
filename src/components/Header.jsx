import React from 'react';
import Navbar from './Navbar/Navbar';

function Header(){
    return(
        <div className="main">
            <Navbar/>

            <div className = "name">
                <p className = "heading">Start Again..!!</p>
                <h1>I'am <span>Md Mahabub Hossain</span> Shozib</h1>
                <p className= "details">Personal Information</p>

                <div className= "header-btns">
                    <a href="#" className="btn-1">Download CV</a>
                </div>
            </div>
            <div class="arrow"></div>
        </div>
    )
}

export default Header