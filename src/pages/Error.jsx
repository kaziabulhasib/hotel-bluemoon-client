import { Link } from "react-router-dom";
import bgImg2 from "../assets/images/akward3.jpg";
const Error = () => {
  return (
    <div
      className='min-h-screen max-w-7xl mx-auto my-8 flex flex-col items-center justify-center bg-opacity-75 backdrop-blur-xl'
      style={{
        backgroundImage: `url(${bgImg2})`,
        backgroundSize: "cover",
      }}>
      <p className='lg:text-5xl font-robo capitalize font-semibold text-white'>
        Page not found
      </p>
      <h1 className='text-[400px]  text-center bg- text-white font-bold mb-0 -mt-32'>
        404
        {/* <span className='text-base '>page not found</span> */}
      </h1>

      <Link
        to='/'
        className='text-3xl bg-white hover:bg-gray-700 py-2 px-4 rounded-md font-medium text-gray-700 hover:text-white '>
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
