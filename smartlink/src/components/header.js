import React from "react";
import { Link } from "react-router-dom";
import '../css/Button.css'
import { FacebookButton, InstagramButton, LinkedinButton, WhatsappButton } from "./buttonsContact";

export default function Header() {
  return(
    <header className="flex justify-around items-center bg-sky-900 h-20 fixed w-full z-10 shadow shadow-gray-500">            
      <Link id="logo" to="/">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3042/3042728.png"
          alt="logotipo da empresa"
          className="h-16 p-1 rounded-full bg-white"
        />
      </Link>      
      <nav id="menu-nav" className="flex gap-6 items-center">
        <Link className="font-bold text-white hover:skew-x-6" to="/">Home</Link>
        <Link className="font-bold text-white hover:skew-x-6" to="/acesso-web-client">Acesso Web Cliente</Link>
        <Link className="font-bold text-white hover:skew-x-6" to="/Serviços">Serviços</Link>        
        <Link className="font-bold text-white hover:skew-x-6" to="/blog">Portfólio</Link>              
      </nav>  
      <nav className="flex gap-4">
        <WhatsappButton />
        <FacebookButton />
        <InstagramButton />
        <LinkedinButton />    
      </nav>        
    </header>
  )
}