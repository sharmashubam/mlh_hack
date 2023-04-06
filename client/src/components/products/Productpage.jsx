import React, { useContext,useEffect,useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from "../footer/Footer";
import Main from "../main/Main";
import {Stack,ImageList, ImageListItem} from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { MyContextProvider } from "../../contexts/MyContextProvider";
import Product from './Product';
import { MyContext } from "../../contexts/MyContextProvider";
export default function Productpage() {
  const { allData } = useContext(MyContext);
  const [intervalId, setIntervalId] = useState(null);
  const [positions, setPositions] = useState([]);
  const { type } = useParams();
  const location = useLocation();
  const item = location.state.item;
  if (!location.state) {
    return <div>Loading...</div>;
  }
  


  return (
    <MyContextProvider>
      <Navbar />
      <div className="mt-[4%] h-[80%] ml-[20%] relative rounded-md shadow-lg bg-white w-[50%]  ">
        <div className="   flex items-center justify-center bg-gray-200 ">
          <img src={item.selectedFile} className={`rounded-lg h-[400px] w-[400px] object-fit
`}
          />
        </div>
        <h3 className="text-base font-semibold  text-center mb-[5%]">{item.title}</h3>
        <div className="p-15 grid grid-cols-2">
          <div className='grid grid-rows-2 pl-10'>

            <p className="text-gray-600 text-sm mb-4 grid col-span-2"><span className="text-blue-900 text-[25px] mr-10">price:</span>${item.price}</p>

            <p className="text-xs text-gray-500 mb-2"><span className="text-blue-900 text-[20px] mr-[10]">ADDRES:</span></p> </div>
          <div className=" justify-between items-center grid grid-rows-2 mr-8">

            <div><h5 className="text-blue-900 text-[15px]">ABOUT PRODUCT</h5><hr className="border-1 border-gray-600"></hr></div>
            <p className="text-gray-500 text-xs mb-2 pb-4">{item.message}</p>

          </div>
        </div>
      </div>

   
        {allData?.length && (
     <div className='grid grid-cols-3 w-[70%] ml-[15%] mt-10'>
          { allData.map((item,i) => {
            return (
            
              
        
                <img  src={item.selectedFile} alt={item.title}  loading="lazy" className='h-[400px] w-[400px] rounded-md mt-6'/>
              


            
             
              
              
              )})}
         </div>
        )}
     


      <Footer />


    </MyContextProvider>
  )
}
