import toast from "react-hot-toast";

const RoomCard = ({ room }) => {
  const { room_images, _id, room_description } = room || {};
  const firstImage =
    room_images && room_images.length > 0 ? room_images[0] : null;
  const handleRoomDetails = () => {
    toast.success(`Showing Room details of : ${room_description}`);
  };
  return (
    <div>
      <div className='card card-compact  bg-base-100 shadow-xl px-2'>
        <figure>
          <img
            onClick={handleRoomDetails}
            src={firstImage}
            alt='Room'
            className='rounded-lg w-full h-[250px] mb-4 '
          />
        </figure>
      </div>
    </div>
  );
};

export default RoomCard;
