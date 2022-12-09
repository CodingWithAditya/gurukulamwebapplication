import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Samajik = () => {
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
          <div class="overflow-auto h-[1000px] px-5  pt-10 mx-auto">
        <div class="  flex flex-col  w-full mb-10">
          <h2 class="text-[10px] text-center text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
          <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">संचालित उल्लेखनीय गतिविधियाँ</h1>
          <p class=" mx-auto justify-between text-justify leading-[50px] text-2xl">1.	आठ वर्ष से लेकर बीस वर्ष तक के बालकों को गुरुकुलीय परम्परानुसार वेद, वेदांग, व्याकरण, वेदान्त, कर्मकाण्ड, ज्योतिष, संगीत, अंग्रेजी, कम्प्यूटर 	आदि की विभिÂ स्थानों में गुरुकुल के माध्यम से निःशुल्क शिक्षा। <br></br>
2.	निःशुल्क रोगोपचार हेतु धर्मार्थ आयुर्वेदिक औषधालय संचालित है जिसमें प्रतिदिन 100 से अधिक रोगी लाभ प्राप्त करते हैं।<br></br>
3.	निःशुल्क रोगोपचार हेतु श्रीनिवास हृदयरोग चिकित्सा केन्द्र संचालित है।<br></br>
4.	कामधेनु वंश की गौमाताओं की सेवा हेतु एक गौशाला संचालित है।<br></br>
5.	गरीब कन्याओं के विवाहार्थ यथासम्भव सहयोग।<br></br>
6.	गरीब बालकों के अध्ययनार्थ स्कूल फीस, पुस्तक-कॉपी तथा अन्य पाठड्ढसामग्री प्रदान करना।<br></br>
7.	साहित्यिक एवं धार्मिक ग्रन्थों का प्रकाशन।<br></br>
8.	संस्कृत समाचार पत्र संस्कृतवाणी का प्रकाशन।<br></br>
9.	संस्कृत के क्षेत्र में उल्लेखनीय कार्य करने वाले विद्वानों को पुरस्कृत करना।<br></br>
10.	निर्धन असहाय छात्रें को छात्रवृत्ति।<br></br>
11.	प्रौढ व्यक्तियों को संस्कृत भाषा हेतु संस्कृत शिविर का संचालन।<br></br>
12.	आधुनिक विद्यालय के छात्रें को संस्कृत-सम्भाषण प्रशिक्षण।<br></br>
13.	योगासन, प्राणायाम आदि की शिक्षा एवं प्रशिक्षण तथा शिबिर संचालन करना।<br></br>
</p>
          <button class="flex mx-auto mt-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
        
        </div>
        
       
        
        
      </div>
      
          <div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-400 z-20  top-0 lg:left-[1px] lg:w-80 relative ">
    
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
