import React, { useEffect, useState } from 'react'
import {FiPlus, FiMapPin, FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'
import imgMakerMap from '../images/map-marker.svg'
import MapIcon from '../utils/MapIcon'
import api from '../services/api'

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanatesMap(){

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [setOrphanages])

  const latitude = -3.1280082
  const longitude = -60.0201577

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
          center={[latitude, longitude]} 
          zoom={15} 
          style={{ width: '100%', height:'100%'}}>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            { orphanages.map(orphanage => {
              return (
                <Marker
                  key={orphanage.id}
                  icon={MapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                >
                  <Popup 
                    closeButton={false}
                    minWidth={280}
                    maxWidth={420}
                    className="map-popup"
                  >
                    {orphanage.name}
                    <Link to={`/orphanages/${orphanage.id}`}>
                      <FiArrowRight size={20} color="#FFF"/>
                    </Link>
                  </Popup>

                </Marker>
              )
            })}
        </Map>
      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanatesMap;