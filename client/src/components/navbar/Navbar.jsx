import { useContext } from "react";
import { MyContext } from "../../contexts/MyContextProvider";

function Navbar() {
  const { clickonprofile, clickprofile } = useContext(MyContext);

  return (
    <nav className="flex items-center justify-between flex-wrap  border-b-2 border-black fixed top-0 left-0 w-full h-16 px-8 z-10 bg-blue-900">
      <div className="flex items-center flex-shrink-0" >
        <img src="./logo9.png" alt="" className="w-[55px] h-[55px] rounded-full ring-4 mr-6"/>
        <h1 className="text-4xl font-bold text-white"> <span>S</span><span>O</span><span>P</span><span>O</span><span>N</span><span>L</span><span>I</span><span>N</span><span>E</span><hr></hr></h1>
      </div>

      <div className="flex items-center">

     <a className="ml-4 px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-5">
          Sign up / Log in
        </a> 
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