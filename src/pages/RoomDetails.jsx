import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const RoomDetails = () => {
  const [reviewCount, setReviewCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
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
  // ADDING REVIEW COUNT ---------------------------------------------------------WILL DELTE IF ERROR HAPPENED
  // Fetch review count when component mounts
  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const response = await axios.get(`/reviews/${_id}`);
        setReviewCount(response.data.totalCount);
      } catch (error) {
        console.error("Error fetching review count:", error);
      }
    };
    fetchReviewCount();
  }, [_id]);

  const handleBookNow = () => {
    const bookingDate = startDate.toLocaleDateString();

    Swal.fire({
      html: `${room_description}<br/> Room size:${room_size} <br/>cost: $ ${price_per_night} / night <br/> Booking Date:${bookingDate}`,

      title: "Confirm Bookings?",
      // text: "Click confirm button for your booking!",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Congrats Booking Confirmed",
          text: "You can now post review",
          icon: "success",
        });
        // I want to post booking data from here.

        navigate(`/reviews/${_id}`);
        console.log(bookingDate);
      }
    });
  };

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
        <p>Review count: {reviewCount}</p>
        <h2 className='card-title'>{_id}</h2>
        <h2 className='card-title'>{room_description}</h2>
        <h2 className='card-title'>{room_size}Room</h2>
        <h2 className='card-title'> {price_per_night} Per Night</h2>
        <h2 className='card-title'>{availability}</h2>
        <h2 className='card-title'>{special_offers}</h2>
        <div className='flex  gap-2 justify-center items-center '>
          <label className='text-gray-700 font-medium'>Booking Date :</label>

          {/* Date Picker Input Field */}
          <DatePicker
            className='border p-2 rounded-md font-semibold text-xl'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className='card-actions '>
          <button
            onClick={handleBookNow}
            className='btn px-24 hover:bg-gray-600 bg-gray-800 text-white'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
