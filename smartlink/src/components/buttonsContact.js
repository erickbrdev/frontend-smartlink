import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';


export const WhatsappButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/000000", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} >
        <FaWhatsapp className="hover:text-white text-green-400" size={28}/>
      </button>
    </div>
  )
}


export const InstagramButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} >
        <FaInstagram className="hover:text-white text-fuchsia-600" size={28}/>
      </button>
    </div>
  )
}

export const FacebookButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} >
        <FaFacebook className="hover:text-white text-blue-400" size={28}/>
      </button>
    </div>
  )
}

export const LinkedinButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} >
        <FaLinkedin className="hover:text-white text-blue-400" size={28}/>
      </button>
    </div>
  )
}
