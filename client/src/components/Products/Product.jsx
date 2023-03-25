import React from 'react';

function Product() {
  return (
    <div className='border-2 border-black p-4 rounded-md shadow-lg mt-12 h-[45vh] w-[25vw]'>
      <div className='mb-4 pl-3'>
        <img src='https://via.placeholder.com/150x150' alt='Book Cover' className='w-full max-h-[20vh] max-w-[20vw]' />
      </div>
      <h3 className='text-lg font-semibold'>Book Name</h3>
      <p className='text-gray-500 mb-2'>$9.99</p>
      <button className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600'>
        Contact
      </button>
    </div>
  );
}

export default Product;