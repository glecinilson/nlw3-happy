import React from 'react'
import {FiPlus, FiMapPin} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'
import imgMakerMap from '../images/map-marker.svg'

function OrphanatesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={imgMakerMap} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita!</p>
        </header>
        <footer>
          <strong><FiMapPin/> Manaus</strong>
          <span>Amazonas</span>
        </footer>
      </aside>
      <Map 
        center={[-2.9875907, -59.9681458]} 
        zoom={15} 
        style={{ width: '100%', height:'100%'}}>
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanatesMap;