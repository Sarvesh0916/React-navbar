import React from 'react'
import './navbar.css';

export default function Navbar() {
    const btnClick =(e) =>{
        document.getElementById("p").innerHTML="You're viewing "+ e.target.innerText +" section.";
    }
    

    return (
        <>        <header className="header">
            <h1 className="logo">NavBar</h1>
            <ul className="nav">
                <li><a href="#Home" onClick={btnClick}>Home</a></li>
                <li><a href="#About" onClick={btnClick}>else</a></li>
                <li><a href="#Projects" onClick={btnClick}>Projects</a></li>
                <li><a href="#Connect" onClick={btnClick}>Contact</a></li>
            </ul>
        </header>
        <div id='div'><p id="p"></p></div>
        </>

    )
}
