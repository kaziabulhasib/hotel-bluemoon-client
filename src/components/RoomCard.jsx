// import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { room_images, _id, room_description } = room || {};
  const firstImage =
    room_images && room_images.length > 0 ? room_images[0] : null;

  return (
    <Link
      to={`/room/${_id}`}
      className='card card-compact  bg-base-100 shadow-xl px-2'>
      <figure>
        <img
          src={firstImage}
          alt='Room'
          className='rounded-lg w-full h-[250px] mb-4 '
        />
      </figure>
    </Link>
  );
};

export default RoomCard;
