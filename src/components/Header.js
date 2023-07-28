import React from "react";
import logo from "../images/meme.png"

export default function Header() {
    return (
        <header>
            <span className="logo"><img src={logo} alt="meme"  width="60px"/>
            <h2 className="title-logo">Meme Generator</h2></span>
            <h4>React Course <br />Project 3</h4>
        </header>
    )
}