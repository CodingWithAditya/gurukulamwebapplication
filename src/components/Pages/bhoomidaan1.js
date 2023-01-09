import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog,FaOm} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Bhoomidaan1 = () => {
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
    
        <div class="bg-red-600 mb-6  ml-[360px] h-[50px] w-[300px] pt-2 rounded-3xl">
                 <h1 class="sm:text-3xl text-2xl text-center font-bold title-font  text-yellow-200">भूमि दान योजना
</h1></div>
  <a href="https://www.gurukulsanskritam.com/gaushala" class="px-5 mb-10 mr-[20px] ml-[790px] -mt-[500px] z-20 py-2.5 relative rounded-xl group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded-xl opacity-50 filter blur-sm bg-gradient-to-br from-orange-600 to-orange-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-xl opacity-50 from-orange-600 to-orange-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-600 to-orange-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-xl bg-gradient-to-br to-orange-600 from-orange-500"></span>

<span class="relative font-bold text-2xl">भूमिदान क्यों करना चाहिए 
 </span>

</a>

      <div class="bg-purple-500 rounded-2xl" >     
          <p class=" mb-2 mx-auto justify-between text-justify p-4 leading-relaxed text-xl text-white  text-shadow-xl font-medium">पूज्य गुरुदेव के द्वारा संस्थापित गुरुकुल, छात्रवास, मन्दिर, आयुर्वेदिक
औ-ुनवजयाधालय, हृदयरोग क्लीनिक, गौ-रु39यााला आदि जिस भूखण्ड पर संचालित है, इन
लक्ष्याें की पूर्ति हेतु अतिरिक्त भूखण्ड की आव-रु39ययकता है। समीप ही एक भूखण्ड
2000 वर्ग गज विक्रय हेतु उपलब्ध है तथा संस्था द्वारा खरीदने हेतु प्रस्तावित
भी है।
अतः आप सभी धर्मप्रेमी महानुभावाें से प्रार्थनापूर्वक निवेदन है
कि अपने माता-ंउचयपिता, दादा-ंउचयदादी आदि पूर्वजाें एवं सम्बन्धियाें के कल्याण हेतु
भूमिदान के आगे ब-सजयें। यह भूमिदान आपके स्वयं, माता-ंउचयपिता, पूर्वज, कुल,
वंश की कीर्ति को सर्वदा अमर पृष्ठ के रूप में गुरुकुल के इतिहास में जीवन्त
रखेगा। अतः आप सभी से सविनय प्रार्थना है कि इस भूमिदान यज्ञ में अपनी
यथासम्भव आहुति प्रदान करें।</p></div>
   
<div class="bg-blue-700  rounded-2xl ">
<p class=" mx-auto justify-between text-justify p-4 leading-relaxed text-xl text-white  text-shadow-xl font-medium"> वर्तमान में 1 गज की सेवा राशि लगभग 21,000/- रूपये है। दानदाताओं 
को संस्था द्वारा भूमिदानप्रमाण स्वरूप निम्नलिखित सम्मान प्रदाना किया जाएगा
तथा शिलालेख अथवा स्मारिका में नाम प्रकाशित किया जायेगा।</p>
</div>
<br></br>
<p class=" mx-auto justify-between text-center leading-relaxed text-2xl">
<div class="bg-orange-400 rounded-2xl h-16 mb-2">
<p class="ml-[200px] mx-auto justify-between text-justify p-4 leading-relaxed text-2xl text-black   font-medium">भूमिदान हीरकरत्न 51 वर्ग गज की सेवाराशी  11,00,000/-  रूपये </p><br></br>
</div>

<div class="bg-purple-400 rounded-2xl h-16 mb-2">
<p class="ml-[200px] mx-auto justify-between text-justify p-4 leading-relaxed text-2xl text-black   font-medium">भूमिदान स्वर्णरत्न 25 वर्ग गज की सेवाराशी 5,25,000/-  रूपये</p><br></br>
</div>

<div class="bg-green-400 rounded-2xl h-16 mb-2">
<p class="ml-[200px] mx-auto justify-between text-justify p-4 leading-relaxed text-2xl text-black   font-medium">भूमिदान रजतरत्न 11 वर्ग गज की सेवाराशी 2,25,000/- रूपये </p><br></br>
</div>

<div class="bg-slate-200 rounded-2xl h-16 mb-2">
<p class="ml-[200px] mx-auto justify-between text-justify p-4 leading-relaxed text-2xl text-black   font-medium">भूमिदान कांस्यरत्न 5 वर्ग गज की सेवाराशी 105,000/- रूपये </p><br></br>
</div>

<div class="bg-purple-400 rounded-2xl h-16 mb-2">
<p class="ml-[200px] mx-auto justify-between text-justify p-4 leading-relaxed text-2xl text-black   font-medium">भूमिदान सेवारत्न 1 वर्ग गज की सेवाराशी 21,000/- रूपये  </p><br></br>
</div>

 </p>
 <div class="bg-red-600 rounded-2xl h-[180px]">
<p class=" mx-auto justify-between text-justify p-4 leading-relaxed text-2xl text-yellow-200   font-medium">
आप यथाशक्ति  1100/-, 2100/-  ,5100/- 11000/- की राशि द्वारा
भूमिदान यज्ञ में आहुति-प्रदान कर सकते हैं। आप स्वयं भूमिदान करें तथा
अन्याें को भी भूमिदान हेतु प्रेरित करके पुण्य के भागी बनें। <br></br>

<br ></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पितृ-ऋण मुक्ति एवं पितृ-दोष निवारण हेतु अपने जीवन में भूमिदान अवश्य करें l  </p>
<br></br>
    
<h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">भूमि दान  का महत्व 
</h1>
<p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">
संसार में वस्त्र, अन्न, धन, पशु आदि सभी प्रकार के दान देने योग्य पदार्थ को देने 
वाली पृथ्वी (भूमि) ही है। वह इस लोक में समस्त प्र्रकार के योग, भोग प्र्रदान करने वाली 
है। पृथ्वी अचला और अक्षय है अतः इसका फल भी अक्षय होता है। शास्त्रें में भी सभी 
प्र्रकार के दानों में पृथ्वी (भूमि) का दान करने वाला मनुष्य सबसे अधिक श्रेष्ठ बताया 
गया है। जैसे कि जन्म-जन्मान्तर पर्यन्त अर्थात् युगों-युगों तक भूमिदान का फल मनुष्य के 
कुल, वंश, पितरों की कीर्ति गाथा को प्रसारित करता है। </p> <br></br>

</div>

        </div>
        
       
            </div>
  )
}
