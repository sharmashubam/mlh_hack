import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profile() {
  return (
    <div className='relative border-2 border-gray-300 rounded-lg shadow-lg w-1/4'>
      <div className='m-auto p-5'>
        <div className='flex justify-center'>
          <AccountCircleIcon style={{ fontSize: 80 }} className='text-gray-500' />
        </div>
        <h1 className='text-xl font-bold mt-4'>Name</h1>
        <p>contact</p>
        <div className='flex justify-center'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-full mt-4'>
          Post
        </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;