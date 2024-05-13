import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/bookings/${user.email}`
        );
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <Helmet>
        <title>My Bookings - Hotel Bluemoon</title>
      </Helmet>
      <h1>My Bookings: {bookings.length}</h1>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {/* Render booking details */}
            {/* Example: <p>{booking.room_description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
