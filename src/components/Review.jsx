import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
// import toast from "react-hot-toast";

const Review = () => {
  const { user } = useContext(AuthContext);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const rating = parseInt(form.rating.value);
    const comment = form.comment.value;
    const review = { email, rating, comment };
    console.table(review);
    Swal.fire("Review submited, Thank You!");
    form.reset();
  };
  return (
    <div className='hero min-h-screen lg:mt-12 mt-6'>
      <div className='hero-content flex-col '>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl text-center font-bold'>Review now!</h1>
          <p className='py-6 w-3/4 mx-auto text-center text-xl'>
            Thank you for choosing Hotel BlueMoon! We hope you have a wonderful
            stay with us. Could you please take a moment to share your thoughts
            on the room you just booked? We value your feedback and it will help
            us improve our services. Thank you!
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
          <form onSubmit={handleReview} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                disabled
                defaultValue={user.email}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Rating</span>
              </label>
              <input
                type='number'
                placeholder='rating'
                className='input input-bordered'
                required
                min='1'
                max='5'
                name='rating'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Comments</span>
              </label>
              <textarea
                placeholder='Enter your comments here'
                name='comment'
                className='textarea textarea-bordered'
                rows='4'
                required></textarea>
            </div>

            <div className='form-control mt-6'>
              <button className='btn px-24 bg-gray-600 hover:bg-gray-800 text-white'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
