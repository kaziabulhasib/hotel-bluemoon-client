// import FeaturedRoomsCard from "./FeaturedRoomsCard";

import FeaturedRoomsCard from "./FeaturedRoomsCard";

const FeaturedRooms = ({ rooms }) => {
  return (
    <div>
      <h1 className='font-robo text-4xl text-center'>
        Check Our Featured Rooms
      </h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8'>
        {rooms.slice(0, 6).map((room) => (
          <FeaturedRoomsCard key={room._id} room={room}></FeaturedRoomsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
