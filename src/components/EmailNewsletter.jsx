function EmailNewsletter() {
  return (
    <div className='p-6 border-2 border-gray-300'>
      <h1 className='text-green-500'>GeeksforGeeks</h1>
      <p>
        How many times were you frustrated while looking out for a good
        collection of programming/algorithm/interview questions? What did you
        expect and what did you get? This portal has been created to provide
        well written, well thought and well explained solutions for selected
        questions. Subscribe us to get daily tech update.
      </p>
      <div className='p-4 border-2 border-gray-300'>
        <input
          className='w-full p-3 mb-3 border border-gray-300'
          type='text'
          placeholder='Name'
          name='name'
          required
        />
        <input
          className='w-full p-3 mb-3 border border-gray-300'
          type='text'
          placeholder='E-mail'
          name='email'
          required
        />
        <img
          className='rounded-full w-12 float-right m-1'
          src='https://media.geeksforgeeks.org/wp-content/uploads/20191212104429/logo8.png'
          alt='logo'
        />
        <br />
        <br />
        <label>
          <input
            className='float-left'
            type='checkbox'
            checked='checked'
            name='check'
          />
          Daily newsletter
        </label>
      </div>
      <div className='p-4'>
        <button
          className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 mb-3 rounded'
          type='submit'
          value='Subscribe'>
          Subscribe
        </button>
        <p id='test'></p>
      </div>
    </div>
  );
}

export default EmailNewsletter;
