const CustomerReviewSection = () => {
  return (
    <section className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Our happy Customers
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto'>
          {/* Customer Review Card 1 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/male1.jpg'
              alt='Customer 1'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>John Doe</h3>
              <p className='text-gray-700'>
                "Bluemoon is my go-to destination for a perfect getaway. The
                rooms are absolutely stunning and have become my favorite place
                to relax and unwind. Thank you for the excellent service!"
              </p>
            </div>
          </div>
          {/* Customer Review Card 2 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/male2.jpg'
              alt='Customer 2'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Jane Smith</h3>
              <p className='text-gray-700'>
                "Every time I visit Hotel Bluemoon, I am impressed by the unique
                and high-quality experience. The suite I stayed in was
                absolutely stunning and has become a memorable part of my
                travels. Thank you for the excellent service!"
              </p>
            </div>
          </div>
          {/* Customer Review Card 3 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/female.jpg'
              alt='Customer 3'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Emily Johnson</h3>
              <p className='text-gray-700'>
                "Hotel Bluemoon is my top choice for finding comfort and luxury
                during my trips. The breathtaking views from my room are
                absolutely stunning and have made my stays unforgettable. Thank
                you for the excellent service!"
              </p>
            </div>
          </div>
          {/* Customer Review Card 4 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/male3.jpg'
              alt='Customer 4'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Michael Williams</h3>
              <p className='text-gray-700'>
                "Hotel Bluemoon is my go-to destination for relaxation and
                tranquility. The spa and wellness facilities are absolutely
                stunning and have become a highlight of my vacations. Thank you
                for the excellent service!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
