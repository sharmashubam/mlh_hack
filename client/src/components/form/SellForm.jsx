import axios from "axios";
import { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { MyContext } from "../../contexts/MyContextProvider";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FileBase from "react-file-base64";
const SellForm = () => {
  const navigate = useNavigate();

  const { getData, sellData, setSellData,loggedIn } = useContext(MyContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/posts", sellData);
      await getData();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="   bg-slate-100  overflow-x-hidden">
      <Navbar/>
      <div className="mt-[5%]   bg-[url('./img.png')] bg-no-repeat mb-[5%]">
      <h1 className="text-3xl font-bold mb-6 text-center text-book ml-[20%] w-[60%] text-amber-900 ">
        Sell Item
      </h1>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%] ml-[30%]"
      >
        <div className="mb-4 ">
          <label className="block text-gray-700 font-bold mb-2 hover:text-blue-800">
            Item Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="book-name"
            type="text"
            onChange={(e) =>
              setSellData({ ...sellData, title: e.target.value })
            }
            placeholder="Enter book name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Item Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="book-price"
            type="text"
            onChange={(e) =>
              setSellData({ ...sellData, price: e.target.value })
            }
            placeholder="Enter book price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Seller Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="writer-name"
            type="text"
            onChange={(e) =>
              setSellData({ ...sellData, seller: e.target.value })
            }
            placeholder="Enter writer name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Item Details
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="book-details"
            placeholder="Enter book details"
            onChange={(e) =>
              setSellData({ ...sellData, message: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Item Image
          </label>
          <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setSellData({
                    ...sellData,
                    selectedFile: base64,
                    user: loggedIn?.user,
                  })
                }
              />
        </div>
        <div className="flex items-center justify-between">
        <Link to='/home'>  <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Submit
          </button></Link>   
       <Link to='/home'>
       <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            type="button"
          >
            Cancel
          </button>
          </Link>   
        </div>
      </form>
     
    </div>
    <Footer />
    </div>
  );
};

export default SellForm;
