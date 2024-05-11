import { useLoaderData } from "react-router-dom";
import EmailNewsletter from "../components/EmailNewsletter";
import LeafletMap from "../components/LeafletMap";

import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";
// import FeaturedRoomsCard from "../components/FeaturedRoomsCard";

const Home = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className='space-y-12'>
      {/* <h1>This is home: {rooms.length}</h1> */}

      <Slider></Slider>
      <LeafletMap></LeafletMap>
      <EmailNewsletter></EmailNewsletter>
      <FeaturedRooms rooms={rooms}></FeaturedRooms>
    </div>
  );
};

export default Home;
