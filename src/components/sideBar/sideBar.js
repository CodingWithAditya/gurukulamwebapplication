import React from 'react';
import { useState } from 'react';
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground} from "react-icons/fa";
import MyModal from './MyModal';
import MyModal2 from './MyModal2';
import MyModal3 from './MyModal3';
import MyModal4 from './MyModal4';
import ReactPlayer from 'react-player';
import { Switch,Route,Redirect } from 'react-router-dom';
import { Bhoomi } from '../Pages/Bhoomi';
import {Navigate} from 'react-router-dom'

 const SideBar = () => {
 
  const [showMyModal, setShowMyModal ] = useState(false);
  
const handleOnClose = () => setShowMyModal(false) 

const [Model2 , setModel2 ] =useState(false);
const handleOnClose2=()=> setModel2(false);

const [Model3 ,setModel3] =useState(false);
const handleOnClose3 =()=> setModel3(false);

const [Model4 ,setModel4] =useState(false);
const handleOnClose4 =()=> setModel4(false);

const [goToBhoomi, setGoToBhoomi ]= React.useState(false);

  if(goToBhoomi){
    return <Navigate to="/bhoomi"/>;
  }


  return (
    
    <div class="flex items-start w-full	 relative"	>
      
    
      <div className="  border-2 border-gray-100 p-6 w-3/4 h-max bg-blue-200 z-20  top-0 -left-96 lg:left-0 lg:w-72 relative ">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-2xl text-center cursor-pointer font-bold text-red-700 border-b border-gray-100 pb-4 w-full">
         जय श्रीमन्नारायण 
          </h1>
          <div className=" my-4 border-b border-gray-100 pb-4">
            <div className="flex mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineHome className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                होम  
              </h3>
            </div>
            <div className="flex mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                गुरुकुल 
              </h3>
            </div>
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                गौशाला </h3>
            </div>
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineMedicalServices className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                आयुर्वेदिक  औषधालय 
              </h3>
            </div>
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaHeart className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                हार्ट क्लिनिक  
              </h3>
            </div>
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaHandshake className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                अन्य सामाजिक प्रकल्प 
              </h3>
            </div>
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaBook className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                प्रकाशन 
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaCampground  className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                भूमिदान  
              </h3>
            </div>
          </div>
       
          {/* logout */}
          <div className=" my-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-2xl text-gray-800 group-hover:text-white font-semibold ">
                Donate Us
              </h3>
            </div>
          </div>
        </div>
      </div>
    
    
      
      <div class=" relative   ml-10 mt-5" >
      <button  onClick={()=> setGoToBhoomi(true)} class=" bg-yellow-300 text-red-600 font-bold py-2 px-4 rounded-full absolute z-10  top-[258px]   right-[650px] " data-modal-toggle="popup-modal" type="button">
  Read More 
</button>
   

<button onClick={()=> setModel2(true)} class="bg-yellow-300 text-red-600 font-bold py-2 px-4 rounded-full absolute z-10  top-[385px]   right-[650px] ">
  Read More 
</button>
<button onClick={()=> setModel3 (true)}class="bg-yellow-300 text-red-600 font-bold py-2 px-4 rounded-full absolute z-10  top-[509px]  right-[648px] ">
  Read More 
</button>
  <div class="mb-4">
  
  <img src={require('../../images/banner3.jpg')}class="max-w-full h-[550px] rounded-lg relative " alt=""/>
  </div>
  
  <button class="bg-orange-500 text-white font-bold  text-xl py-2 px-8 rounded-full absolute z-10  top-[50px]  right-[600px] ">
  DONATE NOW
</button>

<div class="ml-[420px]   -mb-[250px] z-20">
<ReactPlayer url={'https://www.youtube.com/watch?v=XKCGF0Ixd0A'} width={400} height={250}/>
</div>
<ReactPlayer url={'https://www.youtube.com/watch?v=XKCGF0Ixd0A'} width={400} height={250}/>
  </div>
  
 
<MyModal onClose={handleOnClose} visible={showMyModal}/>
<MyModal2 onClose={handleOnClose2} visible={Model2}/>
<MyModal3 onClose={handleOnClose3} visible={Model3}/>
<MyModal4 onClose={handleOnClose4} visible={Model4}/>

<div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-400 z-20  top-0 lg:left-[50px] lg:w-80 relative ">
<div class="mb-4">
    <img src={require('../../images/guruji.jpg')} class="w-[200px] h-[200px] rounded-full ml-5" alt=""/>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 mt-5">
  
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2">वैकुण्ठवासी स्वामी श्रीगोविन्दाचार्यजी </div>
    <p class="text-gray-700 text-base">
      
    विद्वद्वरेण्य श्री गोविन्दाचार्य जी का सम्पूर्ण जीवन संस्कृत एवं संस्कृति को समर्पित रहा। आपके जीवन का उद्देश्य था- शिक्षा, सेवा तथा साधना। </p>

    
    <button onClick={()=> setModel4 (true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-[60px] py-2 rounded-full mt-5">

  Read More
</button>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#जय श्रीमन्नारायण  </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#गुरुकुल</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#गुरुजी </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#भूमिदान  </span>
    
  </div>
</div>
  </div>
       </div>

  </div>
  
  
  
  
  )
}
export default SideBar
