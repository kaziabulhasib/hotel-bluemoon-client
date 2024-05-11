import { useLoaderData } from "react-router-dom";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const rooms = useLoaderData();
  return (
    <div>
      <h1>This is Rooms: {rooms.length}</h1>
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
