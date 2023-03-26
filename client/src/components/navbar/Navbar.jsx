import { useContext } from "react";
import { MyContext } from "../../contexts/MyContextProvider";

function Navbar() {
  const { clickonprofile, clickprofile } = useContext(MyContext);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-2 border-black fixed top-0 left-0 w-full h-16 px-8 z-10">
      <div className="flex items-center flex-shrink-0">
        <h1 className="text-3xl font-bold text-black">Name</h1>
      </div>

      <div className="flex items-center">

      <button className="ml-4 px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-5">
          Sign up / Log in
        </button>
        <button
          onClick={clickprofile}
          className="flex items-center justify-center rounded-full w-12 h-12 ring-2 ring-black"
        >
          <img
            className="object-cover w-full h-full rounded-full"
            src="profile.png"
            alt="Profile"
          />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;