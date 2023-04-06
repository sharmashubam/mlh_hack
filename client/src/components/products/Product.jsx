import React,{useState,useContext,useEffect} from "react";
import { Link } from 'react-router-dom';

import { MyContext } from "../../contexts/MyContextProvider";
function Product({ item }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
   
  };

  
  
  return (
    <div className="mt-[10%] h-[500px] relative rounded-md shadow-lg bg-white w-72 md:w-80">
      <div className="h-[300px]  object-fit flex items-center justify-center bg-gray-200 ">
     <Link to='/product/parameter-data'
  state= {{ item:item,}}
>   <img src={item.selectedFile} className={`rounded-lg h-[200px] w-[200px] transition-colors ${
        isHovering ? "opacity-50" : "bg-white text-blue-500"
      }`}
onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}  />
      </Link ></div>
      <div className="p-15 mx-10">
        <h3 className="text-base font-semibold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4 "><span className="text-blue-900 text-[25px] mr-10">price</span>${item.price}</p>
        
        <p className="text-xs text-gray-500 mb-2"><span className="text-blue-900 text-[15px]">COLLEGE-NAME</span></p>
        <div className="flex justify-between items-center">
          <div className="">
          <h5 className="text-blue-900 text-[15px]">ABOUT PRODUCT</h5><hr className="border-1 border-gray-600"></hr>
            <p className="text-gray-500 text-xs mb-2 pb-4">{`${item.message.length>90?item.message.slice(0,90):item.message}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
