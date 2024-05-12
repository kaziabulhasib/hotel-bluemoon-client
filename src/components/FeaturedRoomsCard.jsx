import { useNavigate } from "react-router-dom";

const FeaturedRoomsCard = ({ room }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate(`/room/${room._id}`);
  };
  const { room_description, room_images } = room || {};
  const firstImage =
    room_images && room_images.length > 0 ? room_images[0] : null;
  return (
    <div>
      <div className='card card-compact w-96 bg-base-100 shadow-xl px-2'>
        <figure>
          <img
            src={firstImage}
            alt='Room'
            className='rounded-lg w-full h-[250px] mb-4 '
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title h-[80px]'>{room_description}</h2>

          <div className='card-actions justify-end'>
            <button onClick={handleBookNow} className='btn '>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoomsCard;
