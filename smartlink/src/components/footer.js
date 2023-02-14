import { FacebookButton, InstagramButton, LinkedinButton, WhatsappButton } from "./buttonsContact"; 

export default function Footer() {
  return (
    <div>                
      <footer className="flex justify-around items-center bg-sky-900 h-12 absolut">  
        <p className="font-bold text-white">
          Copyright © 2023 SmartLink - Todos os direitos reservados.
        </p>      
        <nav className="flex gap-4">
          <WhatsappButton />
          <FacebookButton />
          <InstagramButton />
          <LinkedinButton />          
        </nav>        
      </footer>
    </div>
  )
}