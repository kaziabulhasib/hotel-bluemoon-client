import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "/location.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([22.62, 88.4798], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: iconUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: shadowUrl,
      shadowSize: [41, 41],
    });

    const hotelMaker = L.marker([22.62, 88.4798], { icon: customIcon }).addTo(
      map
    );

    hotelMaker.bindPopup("Hotel BlueMoon").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className='mt-8'>
      <h1 className='font-robo font-semibold text-4xl text-center'>
        Our hotel location
      </h1>
      <div id='map' className='w-full h-[600px] mt-8'></div>
    </div>
  );
};

export default LeafletMap;
