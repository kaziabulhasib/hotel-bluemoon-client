import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const room = useLoaderData();
  const {
    _id,
    room_description,
    price_per_night,
    price_category,
    room_size,
    availability,
    room_images,
    special_offers,
  } = room || {};
  const firstImage =
    room_images && room_images.length > 0 ? room_images[0] : null;

  const secondImage =
    room_images && room_images.length > 0 ? room_images[1] : null;
  return (
    <div className='card w-3/4 mx-auto bg-base-100 shadow-xl mt-24'>
      <div className='flex lg:flex-row flex-col'>
        <figure className='px-10 pt-10 flex-1 lg:h-[300px] lg:w-[300px]'>
          <img src={firstImage} className='rounded-xl w-full h-full' />
        </figure>
        <figure className='px-10 pt-10 flex-1 lg:h-[300px] lg:w[300px]'>
          <img src={secondImage} className='rounded-xl w-full h-full' />
        </figure>
      </div>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{room_description}</h2>
        <h2 className='card-title'>{room_size}</h2>
        <h2 className='card-title'> {price_per_night} Per Night</h2>
        <h2 className='card-title'>{availability}</h2>
        <h2 className='card-title'>{special_offers}</h2>

        <div className='card-actions '>
          <button className='btn px-24 bg-gray-600 hover:bg-gray-800 text-white'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
