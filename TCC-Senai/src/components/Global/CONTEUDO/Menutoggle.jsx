import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// let show = true;

// const menuSection = document.querySelector(".container-inner")
// const menuToggle = menuSection.querySelector(".menu-togle")

// menuToggle.addEventListener("click", () => {

//     document.body.style.overflow = show ? "hidden" : "initial"

//     menuSection.classList.toggle("on", show)
//     show = !show;
// });

export default function toggleMenu() {

    const containerInner = document.getElementById("menu-mobile")

    if (containerInner.className === "menu-mobile-active"){
        containerInner.className = "menu-mobile"
    }else{
        containerInner.className = "menu-mobile-active"
    }

    
    return toggleMenu;
    
}