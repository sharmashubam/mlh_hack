import React from 'react';
import { Link } from 'react-router-dom';
function Profile() {
  return (
    <div className="fixed left-[40%] top-[8%] border-2 border-gray-300 rounded-lg shadow-lg w-[30%] ml-[30%] max-h-[45vh]">
      <div className="m-auto p-5">
        <div className="flex justify-center">
          <img src="./profile.png" alt="" srcset="" />
        </div>
        <h1 className="text-2xl font-bold mt-4 border-b-2">Name</h1>
        <h3 className="text-2xl font-bold mt-4 border-b-2">contact</h3>
        <div className="flex justify-center">
          <Link to="/upload-form">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-full mt-4">
              Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
