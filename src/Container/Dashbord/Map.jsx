import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker,Popup ,LayersControl,LayerGroup } from 'react-leaflet'
import {MARKET_DATA, PARC_DATA} from '../../moc'

export default class Map extends Component {
    
    render() {
      const position = [14.7434, -17.4854]
    return (
        <MapContainer style={{width:'100%', height:'100vh'}} center={[14.7645042, -17.3660286]} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
            />
            <LayersControl position="topright">
              <LayersControl.Overlay name="Afficher les marchés">
              <LayerGroup>
              {
                MARKET_DATA.map(market =>(
                  <Marker position={[market.lat, market.long]}>
                    <Popup>
                      <p>Nom: {market.nom}</p> <br />
                      <p>Superficie: {market.superficie}</p><br />
                      <p>Fréquence: {market.frequence}</p><br />
                      <p>Zone: {market.zone}</p><br />
                    </Popup>
                  </Marker>
                ))
              }
              </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay name="Afficher les parcs">
              <LayerGroup>
              {
                PARC_DATA.map(market =>(
                  <Marker position={[market.lat, market.long]}>
                    <Popup>
                      <p>Nom: {market.nom}</p> <br />
                      <p>Zone: {market.zone}</p><br />
                    </Popup>
                  </Marker>
                ))
              }
              </LayerGroup>
              </LayersControl.Overlay>
            </LayersControl>

      </MapContainer>
    )
  }
}
