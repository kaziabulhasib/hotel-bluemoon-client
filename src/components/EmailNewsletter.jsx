function EmailNewsletter() {
  const handleSubcribe = (e) => {
    e.preventDefault;
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    form.reset();
    alert("Thnaks for connecting Hotel Bluemoon");
    //toast.success("Thanks for connecting with Hotel Bluemoon")
  };
  return (
    <div className='p-6 border-2 border-gray-300 my-12'>
      <h1 className='text-gray-500 font-semibold'>Hotel BlueMoon</h1>
      <p>
        Ready to simplify your hotel booking process? Say goodbye to endless
        options and hello to hassle-free stays. Subscribe for updates, deals,
        and exclusive offers tailored just for you. Book with confidence and
        ease. Subscribe now for a seamless hotel experience!
      </p>
      <form onSubmit={handleSubcribe}>
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

          <br />
          <br />
          <label>
            <input className='float-left ' type='checkbox' name='check' />
            Weekly newsletter
          </label>
        </div>
        <div className='p-4'>
          <button
            className='w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 mb-3 rounded'
            type='submit'
            value='Subscribe'>
            Subscribe
          </button>
          <p id='test'></p>
        </div>
      </form>
    </div>
  );
}

export default EmailNewsletter;
