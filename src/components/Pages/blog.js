import React from 'react'
import {
  MdOutlineLibraryBooks,
  MdOutlineMedicalServices,
  MdOutlineHome,
MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div class="flex items-start w-full	 relative"	>

<div className="  border-2 border-gray-100 p-6 w-3/4 h-max bg-blue-200 z-20  top-0 -left-96 lg:left-0 lg:w-72 relative ">
    <div className="flex flex-col justify-start item-center">
      <h1  className="text-2xl text-center cursor-pointer font-bold text-red-700 border-b border-gray-100 pb-4 w-full" >
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
          
           <Link to="/gurukul">गुरुकुल </Link>
          </h3>
        </div>
        <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
        <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />
          <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
            <Link to="/gaushala">गौशाला</Link>
             </h3>
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
        <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <FaCampground  className="text-3xl text-gray-600 group-hover:text-white " />
          <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
            भूमिदान  
          </h3>
        </div>
        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <FaBlog  className="text-3xl text-gray-600 group-hover:text-white " />
          <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
            ब्लॉग   
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
  <div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-400 z-20  top-0 lg:left-[29px] lg:w-80 relative ">

<div class="mb-4">
<img src={require('../../images/guruji.jpg')} class="w-[200px] h-[200px] rounded-full ml-5" alt=""/>
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 mt-5">

<div class="px-6 py-4 ">
<div class="font-bold text-xl mb-2">वैकुण्ठवासी स्वामी श्रीगोविन्दाचार्यजी </div>
<p class="text-gray-700 text-base">
  
विद्वद्वरेण्य श्री गोविन्दाचार्य जी का सम्पूर्ण जीवन संस्कृत एवं संस्कृति को समर्पित रहा। आपके जीवन का उद्देश्य था- शिक्षा, सेवा तथा साधना। </p>


<button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-[60px] py-2 rounded-full mt-5">

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
