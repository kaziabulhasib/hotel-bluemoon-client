import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

const Update = () => {
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
  const [startDate, setStartDate] = useState(new Date());

  const handleUpdate = () => {
    console.log(room_description);
  };
  return (
    <div>
      <h1 className='text-center mt-12 text-3xl font-semibold'>
        Update Booking Date of :{room_description}
      </h1>
      <div className='space-y-8'>
        <div className='flex lg:flex-row flex-col'>
          <figure className='px-10 pt-10 flex-1 lg:h-[300px] lg:w-[300px]'>
            <img src={firstImage} className='rounded-xl w-full h-full' />
          </figure>
          <figure className='px-10 pt-10 flex-1 lg:h-[300px] lg:w[300px]'>
            <img src={secondImage} className='rounded-xl w-full h-full' />
          </figure>
        </div>

        <div className='flex  gap-2 justify-center items-center '>
          <label className='text-gray-700 font-medium'>Booking Date :</label>
          <DatePicker
            className='border p-2 rounded-md font-semibold text-xl'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className=' text-center mx-auto w-full '>
          <button
            onClick={handleUpdate}
            className='btn px-24 hover:bg-gray-600 bg-gray-800 text-white'>
            Update Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
