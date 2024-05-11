import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map("map");

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,

      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.setView([22.62, 88.4798], 11);

    const hotelMaker = L.marker([22.62, 88.4798]).addTo(map);

    hotelMaker.bindPopup("Hotel BlueMoon").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className='mt-8'>
      <h1 className='font-robo text-4xl text-center'>Our hotel location</h1>

      <div id='map' className='w-full h-[600px] mt-8'></div>
    </div>
  );
};

export default LeafletMap;
