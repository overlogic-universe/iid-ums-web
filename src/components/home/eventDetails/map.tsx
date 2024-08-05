import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { TextConstants } from "@/constants/text-constants";

export default function Map() {
  return (
    <MapContainer
      className="map-style"
      center={[-7.5583941, 110.7686606]}
      zoom={17.5}
      scrollWheelZoom={false}
      boxZoom 
    >
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-7.5583941, 110.7686606]}>
        <Popup>
          <h1 className="font-bold text-sm">{TextConstants.en.location}</h1> <p>{TextConstants.en.locationAddress}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
