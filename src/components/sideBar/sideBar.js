import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
  
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile ,} from "react-icons/cg";
import { FaRegComments ,FaHeart,FaHandshake,FaBook,FaCampground} from "react-icons/fa";


 const SideBar = () => {

  return (
    <div class="flex items-start w-full	 relative   	"	>
    
      <div className="  border-2 border-gray-100 p-6 w-3/4 h-max bg-blue-200 z-20  top-0 -left-96 lg:left-0 lg:w-72 relative ">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-2xl text-center cursor-pointer font-bold text-red-700 border-b border-gray-100 pb-4 w-full">
         जय श्रीमन्नारायण 
          </h1>
          <div className=" my-4 border-b border-gray-100 pb-4">
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
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
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
      <div iv class=" w-2/4 ml-8 mt-2 grid grid-cols-2 gap-8 ">
    <div class="p-6 mt-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-red-900 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">भूमि दान योजना 
</h5>
    </a>
    <p class="mb-3 font-normal text-white-700 dark:text-stone-100">पूज्य गुरुदेव के द्वारा संस्थापित गुरुकुल , छत्रवास , मंदिर ,आयुर्वेदिक औषधालय , हृदयरोग  क्लिनिक , गौशाला आदि जिस भूखंड पर संचालित है इन गुरुकुलों के माध्यम से पूरे देश को ऐसे विद्वान् समर्पित कर सकें, जिनसे आदर्श .</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
<div class="p-6 mt-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-red-900 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">भूमिदान का महत्त्व
</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-stone-100">संसार में वस्त्र, अन्न, धन, पशु आदि सभी प्रकार के दान देने योग्य पदार्थ को देने 
वाली पृथ्वी (भूमि) ही है। वह इस लोक में समस्त प्र्रकार के योग, भोग प्र्रदान करने वाली है। पृथ्वी अचला और अक्षय.</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
<div class="p-6  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-red-900 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">भूमि दान योजना 
</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-stone-100">वर्तमान में 1 गज की सेवा राशि लगभग 21ए000ध- रूपये है। दानदाताओं को 
संस्था द्वारा भूमिदानप्रमाण स्वरूप निम्नलिखित सम्मान प्रदान किया जाएगा तथा 
शिलालेख अथवा स्मारिका में नाम प्रकाशित किया जायेगा।</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
<div class="p-6  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-red-900 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">भूमिदान क्यों करना चाहिए</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-stone-100">गरुड़ पुराण के अनुसार पितरों के निमित्त दिए जाने वाले दश महादानों में से एक 
है- भूमिदान। प्रायः शÕयादान, गोदान, अन्नदान, स्वर्णदान सुलभता से सम्पÂ हो जाते हैं, 
परन्तु भूमिदान देने के लिये अनुकूल व्यवस्था नहीं हो पाती है।</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>


  </div>
  
  <div >
  <figure class="max-w-sm">
  <img src={require('../../images/guruji.jpg')} alt="main-logo"  class="w-60 rounded-lg ml-20 mt-4"/>
  <p class="ml-10  mt-6 mr-10 mb-3 font-normal text-white-700 dark:black-100">विह्ह्रे.ऋ श्री ॰ोविन्दाचार्ऋ  ज ी का स र्म्प ू.ा ज ीवन स ंस्कृत , वं
स ंस्कृति को स मर्पि त रहा। आप के ज ीवन का उद्देश् ऋ था- श् िा¹ााह् स ेवा
तथा स ा/ ना।.</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-10 mt-2">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
  
  
</figure>

  </div>
    
  </div>
  
  )
}
export default SideBar
