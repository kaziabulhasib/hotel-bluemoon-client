import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const fetchBookings = async () => {
    try {
      const response = await axios.get(`/bookings/${user.email}`);
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/bookings/${user.email}`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    if (user?.email) {
      fetchBookings();
    }
  }, [user]);

  // review button
  const handleReview = (id) => {
    navigate(`/reviews/${id}`);
  };

  // cancle button
  const handleCancel = async (roomId) => {
    console.log("delete room of ", roomId); // room id asei ni to map kore

    // how can I get the booking data before bookings.map

    // sweet alert --------
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Your booking will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "confirm",
      cancelButtonText: "Back",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`/bookings/${roomId}`);
        fetchBookings();
        if (response.data.deletedCount > 0) {
          await Swal.fire({
            title: "Booking Canceled!",
            text: "Your booking  has been canceled.",
            icon: "success",
          });
        }
      } catch (error) {
        console.error("There was an error deleting the item!", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error deleting the item.",
          icon: "error",
        });
      }
      console.log("delete confirmed");
    }
    // ---------------
  };

  return (
    <div>
      <Helmet>
        <title>My Bookings - Hotel Bluemoon</title>
      </Helmet>
      <h1 className='text-3xl font-bold my-8 text-center'>My Bookings</h1>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Room Size</th>
              <th>Price per Night</th>
              <th>Booking Date</th>
              <th>Cancel</th>
              <th>Post Review</th>
              <th>Update Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan='7' className='text-center'>
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.roomDescription}</td>
                  <td>{booking.roomSize}</td>
                  <td>${booking.pricePerNight}</td>
                  <td>{booking.bookingDate}</td>
                  <td>
                    <button
                      onClick={() => handleCancel(booking.roomId)}
                      className='btn bg-red-400 hover:bg-red-500 text-white '>
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleReview()}
                      className='btn text-white bg-blue-400 hover:bg-blue-600 '>
                      Review
                    </button>
                  </td>
                  <td>
                    <button className='btn  text-white bg-green-600 hover:bg-green-700 '>
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
