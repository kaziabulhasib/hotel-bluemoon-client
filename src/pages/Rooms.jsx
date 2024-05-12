import { useLoaderData } from "react-router-dom";
import RoomCard from "../components/RoomCard";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  const rooms = useLoaderData();
  return (
    <div className='mt-12'>
      <Helmet>
        <title>Rooms-Hotel Bluemoon</title>
      </Helmet>
      <h1 className='text-4xl font-robo font-semibold text-center '>
        Checks Rooms Suitable for You.
      </h1>
      <div>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-8'>
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room}></RoomCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
