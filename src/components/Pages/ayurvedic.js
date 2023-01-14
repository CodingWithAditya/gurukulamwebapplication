import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog,FaOm} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Ayurvedic = () => {
  return (
    <div class="flex items-start w-full	 relative"	>

<div className=" sticky  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-200 z-20  top-0 -left-96 lg:left-0 lg:w-72 relative ">
        <div className="flex flex-col justify-start item-center">
        
          <div className=" -my-2 border-b border-gray-100 pb-4">
            <div className="flex mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineHome className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
              <Link to="/">होम </Link>
                  
              </h3>
            </div>
                   
            <Link to="/gurukul">
            <div className="flex mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              
              <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />

              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
       गुरुकुल
              </h3>
            </div>
            </Link>
            <Link to="/gaushala">
            <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
              गौशाला
                 </h3>
            </div>
            </Link>
            <Link to="/ayurvedicclinic">
            <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineMedicalServices className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
               आयुर्वेदिक  औषधालय 

              </h3>
            </div>
            </Link>
            <Link to="/heartclinic">
            <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaHeart className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                 हार्ट क्लिनिक  

              </h3>
            </div>
            </Link>
            <Link to="/samajik">
            <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaHandshake className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                 अन्य सामाजिक प्रकल्प  

                 
              </h3>
            </div>
            </Link>
            <Link to="/prakashan">
            <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaBook className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
             प्रकाशन
           
              </h3>
            </div>
            </Link>
            <Link to="/prakashan">
            <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaOm className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
मंदिर            
              </h3>
            </div>
            </Link>
           

            <Link to="/blog">
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaBlog  className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
              ब्लॉग
                   
              </h3>
            </div>
            </Link>
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
    
          <div class="overflow-auto h-[1000px] px-5  pt-10 mx-auto">
        <div class="  flex flex-col  w-full mb-10">
        <div class="flex flex-wrap justify-center">
  <img
 src={require('../../images/Aayurvedicaushadhalay.JPG')}
  class="p-1 bg-white border rounded w-[750px] h-[450px] mb-2"
  alt="..."
/>
</div>
<div class="bg-orange-500 w-[390px] ml-[400px] mt-3 mb-4 rounded-[100px]   shadow-2xl">
              <p class=" mt-2 p-1 text-3xl text-center font-semibold  mb-4 text-shadow-xl text-white">धर्मार्थ आयुर्वेदिक औषधालय</p>
              </div>
          <p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">निःशुल्क रोगोपचार हेतु धर्मार्थ आयुर्वेदिक औषधालय संचालित है। देश के प्रतिष्ठित वैद्य श्री वीरेन्द्र शाह जी के मार्गनिर्देशन में प्रतिदिन 100 से अधिक रोगी लाभ प्राप्त करते हैं। रोगोपचार हेतु आये सभी लोगों को वैद्य-परामर्श तथा औषधियाँ निःशुल्क ही प्रदान की जाती है। </p>
          <button class="flex mx-auto mt-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
         
        </div>
        
       
        
        
      </div>
      
         
            </div>
  )
}
