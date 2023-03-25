

function Product() {
  return (
    <div className='border-2 border-black p-4 rounded-md shadow-lg mt-[20%] w-[80%] '>
      <div className='mb-4 pl-20'>
        <img src='https://via.placeholder.com/150x150' alt='Book Cover' className=' h-[50%] w-[50%] rounded-[5px] ' />
      </div>
      <h3 className='text-lg font-semibold'>Book Name</h3>
      <p className='text-gray-500 mb-2'>$9.99</p>
      <button className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mb-2'>
        Contact
      </button>
    </div>
  );
}

export default Product;