import { Link } from "react-router-dom"
import Monitoring from "../components/section"
import Support from "../components/ support"
import {BsFillTelephoneFill} from 'react-icons/bs'
import Cards from "../components/cards"
import Baseboard from "../components/baseboard"

export default function Home () {
  return (
    <div>
      <main className="flex items-center bg-sky-900 p-3">
        <div className="mx-24 mt-24 flex flex-col gap-5 w-3/6 items-center justify-center">
          <h1 className="text-center font-bold text-2xl text-white border-b-2">SmartLink</h1>
          <p className="font-bold text-white italic">
            Mantenha o controle do seu veiculo particular ou sua frota onde quer que esteja a qualquer hora
          </p>
          <Link className="font-bold flex items-center justify-center" to="/contato">
            <button className="button-h"> 
              <span className="flex items-center gap-1">
                Entrar em contato
                <BsFillTelephoneFill />
              </span>
            </button>
          </Link>        
        </div>
        <div className="mx-24 mt-24 w-3/6 flex flex-col items-center justify-center">
          <img 
            className="rounded-xl border-4 border-sky-700"
            src="https://dicas.olx.com.br/wp-content/uploads/2021/04/tipos-de-carros-capa.png"
            alt="Exemplo de carros"
          />
        </div>         
      </main>   
      <Monitoring /> 
      <Support />
      <div className="flex gap-5 justify-center items-center bg-sky-900">
        <Cards 
          image="https://www.pejucara.rs.gov.br/admin/globalarq/noticia/noticia/651_366/ce9c5364825f8d4c7fc5393ee91d8393.jpeg"
          title="Assistência 24h"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
        />
        <Cards 
          image="https://www.verifact.com.br/wp-content/uploads/2019/11/verifact_prova_localizacao.jpg"
          title="Conforto"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
        />
        <Cards 
          image="https://st2.depositphotos.com/5857090/8526/i/450/depositphotos_85264318-stock-photo-orange-landmark-on-the-map.jpg"
          title="Acesso ao App e Web"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
        />        
      </div>          
      <Baseboard /> 
    </div>
  )
}