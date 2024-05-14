import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

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
                <td colSpan='6' className='text-center'>
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
                    <button className='btn btn-primary'>Cancel</button>
                  </td>
                  <td>
                    <button className='btn btn-primary'>Review</button>
                  </td>
                  <td>
                    <button className='btn btn-primary'>Update</button>
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
