const FeaturedRoomsCard = ({ room }) => {
  const {
    Availability,
    "Room Description": roomDescription,
    "Room Images": roomImages,
  } = room || {};
  const firstImage = roomImages && roomImages.length > 0 ? roomImages[0] : null;
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
          <h2 className='card-title h-[80px]'>{roomDescription}</h2>

          <div className='card-actions justify-end'>
            <button className='btn '>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoomsCard;
