import { useLoaderData } from "react-router-dom";
import EmailNewsletter from "../components/EmailNewsletter";
import LeafletMap from "../components/LeafletMap";

import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";
import { Helmet } from "react-helmet-async";
import CustomerReviewSection from "../components/CustomerReviewSection";
// import FeaturedRoomsCard from "../components/FeaturedRoomsCard";

const Home = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className='space-y-12'>
      <Helmet>
        <title>Home-Hotel Bluemoon</title>
      </Helmet>

      <Slider></Slider>
      <LeafletMap></LeafletMap>
      <EmailNewsletter></EmailNewsletter>
      <FeaturedRooms rooms={rooms}></FeaturedRooms>
      <CustomerReviewSection></CustomerReviewSection>
    </div>
  );
};

export default Home;
