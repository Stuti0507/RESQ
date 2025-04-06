import React from 'react'
import { MapContainer,TileLayer,Marker } from "react-leaflet"
import { Icon }from "leaflet"
import 'leaflet/dist/leaflet.css'
const Map = () => {
  const mark=[
    {
      geocode:[26.869046,80.908774],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87221,80.91188],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87359,80.90424],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87359,80.90837],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87382,80.90424],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87360,80.90868],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87440,80.91090],
      popUp:"Quell zone"
    },
    {
      geocode:[26.87434,80.90649],
      popUp:"Quell zone"
    },
    {
      geocode:[26.86699,80.90923],
      popUp:"Quell zone"
    },
  ];
const customIcon=new Icon({
  iconUrl:"/img/arrow.png",
  iconSize:[148,148]
})
  
  return (
    <div id='Map'>
     <div id='mapp'>
      
     <MapContainer center={[26.8617, 80.9045]} zoom={15} >
       <TileLayer 
       
       url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        /> 
        {mark.map(marker=>(
          <Marker position={marker.geocode} icon={customIcon}>

          </Marker>

        ))}
      </MapContainer>
      
      
      
      </div> 
      <div id='guide'>
        <h1>Q-link</h1>
        <p>I will assist you in your hard times</p>
        <div id="bot"></div>
        <div id="chat">
          <div id="chatbox"></div>
          <div id="inpp">
            <input type="text" />
            <button>SEND</button>
          </div>
        </div>
      </div>
     
      
    </div>
  )
}

export default Map
