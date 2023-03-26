function Footer() {
  return (
    <div className='mt-[8%] bottom-0 left-0 w-full bg-black py-6'>
      <div className='w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
        <h2 className='text-white text-3xl font-bold pb-6 md:pb-0 text-center md:text-left'>
          Name
        </h2>
        <div className='w-11/12 md:w-9/12 mx-auto mt-6  pl-[17%]'>
        <ul className='flex flex-wrap justify-center md:justify-start'>
          <li className='mx-3'>
            <a href='#' className='text-white hover:text-gray-400'>
              Home
            </a>
          </li>
          <li className='mx-3'>
            <a href='#' className='text-white hover:text-gray-400'>
              About
            </a>
          </li>
          <li className='mx-3'>
            <a href='#' className='text-white hover:text-gray-400'>
              Services
            </a>
          </li>
          <li className='mx-3'>
            <a href='#' className='text-white hover:text-gray-400'>
              Blog
            </a>
          </li>
          <li className='mx-3'>
            <a href='#' className='text-white hover:text-gray-400'>
              Contact
            </a>
          </li>
        </ul>
        
        
      </div>
      </div>
      <div className="flex justify-center mt-10">
      <p className='text-white text-center md:text-left text-lg font-semibold'>
          &copy; 2023 Name. All Rights Reserved.
        </p>
        </div>
    </div>
  );
}

export default Footer;
