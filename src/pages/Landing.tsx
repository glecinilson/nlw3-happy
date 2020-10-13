import React from 'react'
import {Link} from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import '../styles/global.css'
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg'

function Landing(){
 return (
    <div id="page-landing">
      <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
          <main>
            <h1>Leve felicidade para o mundo!</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>

          <div className="location">
            <strong><FiMapPin/>Manaus</strong>
            <span>Amazonas</span>
          </div>

          <Link to="/app" className="enter-app"> <FiArrowRight size={26} /> </Link>
      </div>
    </div>
  );
}

export default Landing;