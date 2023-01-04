
    import React from 'react'
    import {
      MdOutlineLibraryBooks,
      MdOutlineMedicalServices,
      MdOutlineHome,
    MdOutlineLogout,
  } from "react-icons/md";
  import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog,FaOm} from "react-icons/fa";
  import { Link } from 'react-router-dom';

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
    export const Gurukul2 = () => {
      
      
      return (
        <div class="flex items-start w-full	 relative"	>
          

          <div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-200 z-20  top-0 -left-96 lg:left-0 lg:w-72 relative ">
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
   
    <div class="ml-10">
    <a href="https://www.gurukulsanskritam.com/gaushala" class="px-5 mb-10 ml-[10px] py-2.5 relative rounded-xl group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded-xl opacity-50 filter blur-sm bg-gradient-to-br from-orange-600 to-orange-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-xl opacity-50 from-orange-600 to-orange-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-600 to-orange-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-xl bg-gradient-to-br to-orange-600 from-orange-500"></span>

<span class="relative">गौशाला </span>

</a>
<a href="https://www.gurukulsanskritam.com/prakashan" class="px-5 mb-10 ml-[900px] py-2.5 relative rounded-xl group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded-xl opacity-50 filter blur-sm bg-gradient-to-br from-orange-600 to-orange-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-xl opacity-50 from-orange-600 to-orange-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-600 to-orange-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-xl bg-gradient-to-br to-orange-600 from-orange-500"></span>

<span class="relative">प्रकाशन  </span>

</a>
    </div>

      <h2 class="text-[10px] text-center mt-12 text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">श्रीनिवास संस्कृत विद्यापीठम् </h1>
      <p class=" mx-auto justify-between text-justify leading-[40px] text-xl">गुरुकुल का संचालन (छात्रें के आवास, भोजन, वस्त्र, पुस्तक, औषधोपचार, अध्यापकों का वेतन आदि व्यवस्था करने के लिए श्रीनिवास संस्कृत विद्यापीठम् के नाम से सोसाइटी एक्ट 1861 के तहत प×जीकृत किया गया है, जिसे 12-A एवं 80 G की मान्यता प्राप्त है। इस संस्था के माध्यम से पाठशाला की सम्पूर्ण व्यवस्था, भोजन, आवास, वेतन, संस्कृत-पत्रिका प्रकाशन, संस्कृत प्रशिक्षण आदि संस्कृत से जुड़े सभी कार्य यथासम्भव सेवा के रूप में किये जाते हैं।
	इसी तरक का एक गुरुकुल/पाठशाला वैकुण्ठवासी स्वामी श्री गोविन्दाचार्य जी द्वारा सर्वप्रथम पुष्पित हुआ श्रीनिवास संस्कृत विद्यापीठम्। यह एक संस्कृत गुरुकुल है। वर्तमान में इसमें 70 विद्यार्थी निःशुल्क वेद, वेदांग, वेदान्त, दर्शन, साहित्य, अंग्रजी, विज्ञान, कम्प्यूटर, योग आदि का निःशुल्क प्रशिक्षण प्राप्त कर रहे हैं। इस गुरुकुल में 70 विद्यार्थी सहित 100 लोग भोजन, वस्त्र, रोगोपचार सहित निःशुल्क आवास करते हैं। 
	गुरु जी के दृढ लक्ष्य एवं आश्रमस्थ सभी छात्रें तथा अध्यापकों के परिश्रम के फलस्वरूप यह विद्यापीठ दूर-दूर क्षेत्रें व देशों में विद्वत्समाज एवं जनसमाज का प्रशस्तपात्र रहा है।  <br></br>
  <br></br>
	यहाँ के छात्रें की उपलब्धियाँ - <br></br>  <br></br>

	1- जून 1999 से लेकर दिसम्बर 2017 तक श्रीगोविन्दाचार्यजी के मार्गदर्शन, संस्थापकत्व एवं संचालकत्व में संचालित विभिन्न शिक्षण संस्थाओं की प्रगति यह है कि 7 छात्र च्ीण्क (विद्यावारिधि) की उपाधि प्राप्त कर चुके हैं। लगभग 50 छात्र शोध में पंजीकृत हैं। 100 से अधिक छात्र (ठण्मक) (शिक्षाशास्त्री) कर चुके हैं और कई छात्र अभी प्रशिक्षणरत हैं। इसी तरह 200 से ज्यादा छात्रें ने आचार्य (डण्। ) की उपाधि प्राप्त कर ली है और अभी 300 से अधिक छात्र विभिन्न कक्षाओं में अध्ययनरत हैं। मुख्यशाखा दिल्ली की है और इसमें सबसे अधिक लगभग 70 छात्र होते हैं।   <br></br>  <br></br>
	2- यहाँ के विद्यार्थियों ने राज्यीय, राष्ट्रिय, अखिल भारतीय स्तर पर  आयोजित शलाका परीक्षा, भाषण प्रतियोगिता, श्लोकान्त्याक्षरी प्रतियोगिता, सूत्रन्त्याक्षरी प्रतियोगिता, वाद-विवाद प्रतियोगिता, एकल श्लोकसंगीत प्रतियोगिता, नुक्कड़ नाटक आदि विभिन्न कार्यक्रमों में भाग ग्रहण कर प्रथम, द्वितीय आदि स्थानों को प्राप्त कर गौरवान्वित किया है। <br></br>  <br></br>
	3- यहाँ से पढे हुये छात्रें ने विभिÂ विश्वविद्यालयों में जाकर बी-ए तथा एम-ए इत्यादि कक्षाओं में अनेक स्वर्णपदक प्राप्त किये हैं।  <br></br>  <br></br>
	4- यहाँ से शिक्षा प्राप्त किये हुये अनेक छात्र भारत तथा नेपाल, अमेरिका इत्यादि देशों में विभिÂ विश्वविद्यालयों में प्राफेसर, लेक्चरर इत्यादि पदों पर रहकर संस्कृत एवं संस्कृति प्रचार प्रसार में संलग्न है। <br></br> <br></br>
</p>

       <button class="flex mx-auto mt-[10px] text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
       
       
    </div>
    
   
    
    
</div>
        </div>
      )
    }
    