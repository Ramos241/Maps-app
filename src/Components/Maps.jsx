import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const icon = L.icon({
  iconUrl: "../Popup.png",
  iconSize: [38, 38]
})

const position = [8.35287052, -63.57309996] //Anzoategui

function RacetCenterView(props){
  const  { seletPosition } = props;
  const map = useMap();

  useEffect(() =>{
    if (seletPosition) {
      map.setView(
        L.latLng(seletPosition?.lat, seletPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }

  },[seletPosition])
  return null
}

const Maps = (props) => {

  const { seletPosition } = props;
  const locationSelection = [seletPosition?.lat, seletPosition?.lon];

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {seletPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
          {seletPosition?.lat} <br /> {seletPosition?.lon}
          </Popup>
        </Marker>
       )}
       <RacetCenterView seletPosition={seletPosition}/>
    </MapContainer>
  )
}

export default Maps