
    import React from 'react'
    import {
      MdOutlineLibraryBooks,
      MdOutlineMedicalServices,
      MdOutlineHome,
    MdOutlineLogout,
  } from "react-icons/md";
  import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
  import { Link } from 'react-router-dom';

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
    export const Gurukul1 = () => {
      
      
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
              <Link to="/">होम </Link>
                  
              </h3>
            </div>
                   
            <Link to="/gurukul">
            <div className="flex mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              
              <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />

              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
       गुरुकुल
              </h3>
            </div>
            </Link>
            <Link to="/gaushala">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLibraryBooks className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
              गौशाला
                 </h3>
            </div>
            </Link>
            <Link to="/ayurvedicclinic">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineMedicalServices className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
               आयुर्वेदिक  औषधालय 

              </h3>
            </div>
            </Link>
            <Link to="/heartclinic">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaHeart className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                 हार्ट क्लिनिक  

              </h3>
            </div>
            </Link>
            <Link to="/samajik">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaHandshake className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
                 अन्य सामाजिक प्रकल्प  

                 
              </h3>
            </div>
            </Link>
            <Link to="/prakashan">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaBook className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
             प्रकाशन
           
              </h3>
            </div>
            </Link>
            <Link to="/bhoomidaan">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaCampground  className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-xl text-gray-800 group-hover:text-white font-semibold ">
            भूमिदान  
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
   
      <h2 class="text-[10px] text-center text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">श्रीनिवास सेवार्थ न्यास</h1>
      <p class=" mx-auto justify-between text-justify leading-relaxed text-xl">श्रीनिवास सेवार्थ न्यास एक नो प्रॉफिट नो लॉस की नीति लेकर शिक्षा, सेवा, साधना के माध्यम से समाजसेवा के लिए समर्पित पब्लिक चैरिटेबल ट्रस्ट है, जिसके संस्थापक वैकुण्ठवासी स्वामी श्री गोविन्दाचार्य जी (गोविन्द प्रसाद शर्मा) हैं। यह न्यास (ट्रस्ट) दिल्ली रजिस्ट्रार कार्यालय से पंजीकृत और इनकम टैक्स की धारा 12-A एवं 80 G के अन्तर्गत संस्था पूर्णरूपेण आयकर मुक्त है एवं 80-G के अन्तर्गत दानादाताओं के पक्ष में संस्था को करमुक्ति प्रमाणपत्र प्राप्त है। न्यास के माध्यम से शिक्षा, सेवा और साधना को उद्देश्य करके सभी कार्य किये जाते हैं। जैसे कि मन्दिर की व्यवस्था, गौशाला की व्यवस्था, निःशुल्क आयुर्वेदिक डिस्पैन्शरी, गरीब एवं असहाय बच्चों की शिक्षा हेतु सहायता, गरीब कन्याओं के विवाह में सहायता और सभी देश, धर्म, संस्कृति और समाज के हित में यथासम्भव सेवा के कार्य किये जाते हैं।</p>
      <button class="flex mx-auto mt-10 mb-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
      <div class="flex flex-wrap justify-center">
  
      <div class="transform transition duration-500 hover:scale-105  flex justify-center mb-10 ">
  <div class="flex flex-col md:flex-row w-[1100px] rounded-lg bg-white shadow-md hover:shadow-2xl">
    <img class=" w-full h-[200px] md:h-auto object-cover md:w-[300px] rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.postimg.cc/x11Z6NR9/IMG20180921125829.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
     
      <p class="text-gray-700 text-xl  leading-relaxed mb-4">
      प्रत्येक शुक्रवार और पुष्य नक्षत्र को कुल मिलाकर महीने में पाँच दिन भगवान् श्रीवेंकटेश जी का विशेष अभिषेक (तिरुम×जन) होता है। यह अवश्य दर्शनीय है। इसके अतिरिक्त रामनवमी, कृष्णजयन्ती में भी तिरुम×जन होता है। नौ चाँदी के कलशों में गंगा, यमुना का जल, दूध, दही, घी, शहद और फलों का रस तथा ओषधियों से परिपूर्ण करके उनकी स्थापना करने के पश्चात् उन्हीं कलशों से भगवान् का शास्त्रीय विधि से खुला स्नान होता है। तैत्तिरीयोपनिषद् की शिक्षावल्ली, आनन्दवल्ली एवं भृगुवल्ली का सामूहिक पाठ होता है। न्यूनतम ग्यारह लीटर दूध स्नान में प्रयोग किया जाता है। भक्तों की श्रद्धा पर दूध की मात्र 21, 31 एव इससे अधिक लीटर भी हो सकती है। भगवान् का अभिषेक कराने से धर्म, अर्थ, काम और मोक्ष चारों पुरुषार्थों प्राप्ति होती है। यह निष्काम भाव से करने पर मोक्ष की प्राप्ति होती है तो कामना से कराने पर मनोरथों की सिद्धि हो जाती है। यह अभिषेक यदि कोई भक्त अपनी ओर से करवाना चाहे तो उनके संकल्प से भी किया जाता है। इसका खर्च लगभग 3100/- रूपये आता है। राजभोग लगाना चाहें तो इसका व्यय 5100/- के आसपास अलग से होता है। 
      </p>
      <button class="flex mx-auto mt-[10px] ml-[1px] text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
       
    </div>
  </div>
</div>
</div>

<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-800 border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              वस्तु 
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              दैनिक
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              मासिक
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              वार्षिक
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">1</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              शुक्रवार को श्रीतिरुपतिबालाजी के तिरुम×जन अभिषेक	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              3100/- रुपये 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              भगवान् के श्रृंगार हेतु पुष्प एवं पुष्पमाला (मासिक)	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              20000/-रुपये
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">3</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              भगवान् का पुष्पमाला का श्रृंगार (एक दिन का)	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              700/-रुपये 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
           ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">4</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              अष्टोत्तरशत तुलसी अर्चना               </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              100/- रुपये 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
           ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
            </tr>
          
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">5</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              सहस्र तुलसी अर्चना	               </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              500/- रुपये 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
           ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">6</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              एक दिन का धनुर्मास उत्सव             </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              5100/-	 रुपये 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
           ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
            </tr>
          

            
          </tbody>
        </table>
      </div>
    </div>
      
       
    </div>
    
   
    
    
</div>
        </div>
      )
    }
    