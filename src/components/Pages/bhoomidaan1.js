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
                 <h1 class="sm:text-3xl text-2xl text-center font-medium title-font  text-yellow-200">भूमि दान योजना
</h1></div>
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
</div>

        </div>
        
       
            </div>
  )
}
