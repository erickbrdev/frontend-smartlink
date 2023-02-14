import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './css/WhatsappIcon.css'
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home';

function App() {
  return (
    <div>
      <Header />
      <a 
        target="_blank" 
        rel="noreferrer"
        href="https://wa.me/000 "          
      >
        <img 
          src='https://t.ctcdn.com.br/63V25kDFoZnMMF2WjQavNUcoawY=/400x400/smart/filters:format(webp)/i618809.png'
          alt="icone whatsapp" 
          className='whatsapp-icon'/>
      </a>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>     
      <Footer />      
    </div>
  );
}

export default App;
