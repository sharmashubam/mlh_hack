

function Footer() {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-black py-6'>
      <div className='w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
        <h2 className='text-white text-3xl font-bold pb-6 md:pb-0 text-center md:text-left'>
          name
        </h2>
        <p className='text-white text-center md:text-left text-lg font-semibold'>
          Copyright 2023.
          <br className='md:hidden' />
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;