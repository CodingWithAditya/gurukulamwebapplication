import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Bhoomidaan = () => {
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
          <h2 class="text-[10px] text-center text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
          <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">भूमि दान योजना
</h1>
          <p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">पज्ू य गरुु दवे के द्वारा सस्ं थापित गरुु कलु , छात्रवास, मन्दिर, आयवु िर्े दक
औषधालय, हृदयरोग क्लीनिक, गौशाला आदि जिस भूखण्ड पर संचालित हैं, इन 
लक्ष्यों की पूर्ति हेतु अतिरिक्त भूखण्ड की आवश्यकता है। समीप ही एक भूखण्ड 
2000 वर्ग गज विक्रय हते ु उपलब्ध है तथा सस्ं था द्वारा खरीदने हते ु पस््र तावित भी ह।ै
अतः आप सभी धर्मप्रेमी महानुभावों से प्रार्थनापूर्वक निवेदन है कि अपने 
माता-पिता, दादा-दादी आदि पूर्वजों एवं सम्बन्धियों के कल्याण हेतु भूमिदान के 
लिये आगे बढें। यह भूमिदान आपके स्वयं, माता-पिता, पूर्वज, कुल, वंश की कीर्ति 
को सर्वदा अमर पृष्ठ के रूप में गुरुकुल के इतिहास में जीवन्त रखेगा। अतः आप सभी 
से सविनय प्रार्थना है कि इस भूमिदान यज्ञ में अपनी यथासम्भव आहुति प्रदान करें।</p>
<br></br>
<p class=" mx-auto justify-between text-justify leading-relaxed text-2xl"> पज्ू य गरुु दवे के द्वारा सस्ं थापित गरुु कलु , छात्रवास, मन्दिर, आयवु िर्े दक
          वर्तमान में 1 गज की सेवा राशि लगभग 21ए000ध- रूपये है। दानदाताओं को 
संस्था द्वारा भूमिदानप्रमाण स्वरूप निम्नलिखित सम्मान प्रदान किया जाएगा तथा 
शिलालेख अथवा स्मारिका में नाम प्रकाशित किया जायेगा।</p>
<br></br>
<p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">
पज्ू य गरुु दवे के द्वारा सस्ं थापित गरुु कलु , छात्रवास, मन्दिर, आयवु िर्े दक <br></br>
       1. भूमिदान हीरकरत्न 51 वर्ग गज की सेवाराशि = 11ए00ए000ध- रूपये  <br></br>
2. भूमिदान स्वर्णरत्न 25 वर्ग गज की सेवाराशि = 5ए50ए000ध- रूपये <br></br>
3. भूमिदान रजतरत्न 11 वर्ग गज की सेवाराशि = 2ए25ए000ध- रूपये <br></br>
3. भूमिदान कांस्यरत्न 5 वर्ग गज की सेवाराशि = 105ए000ध- रूपये <br></br>
4. भूमिदान सेवारत्न 1 वर्ग गज की सेवाराशि = 21ए000ध- रूपय </p> <br></br>
<p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">
पज्ू य गरुु दवे के द्वारा सस्ं थापित गरुु कलु , छात्रवास, मन्दिर, आयवु िर्े दक
          आप यथाशक्ति 1100ध-ए 2100ध-ए 5100ध- 11000ध- की राशि द्वारा 
भूमिदान यज्ञ में आहुति-प्रदान कर सकते हैं। आप स्वयं भूमिदान करें तथा
अन्यों को भी भूमिदान हेतु प्रेरित करके पुण्य के भागी बनें। </p>
<br></br>
<p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">
संसार में वस्त्र, अन्न, धन, पशु आदि सभी प्रकार के दान देने योग्य पदार्थ को देने 
वाली पृथ्वी (भूमि) ही है। वह इस लोक में समस्त प्र्रकार के योग, भोग प्र्रदान करने वाली 
है। पृथ्वी अचला और अक्षय है अतः इसका फल भी अक्षय होता है। शास्त्रें में भी सभी 
प्र्रकार के दानों में पृथ्वी (भूमि) का दान करने वाला मनुष्य सबसे अधिक श्रेष्ठ बताया 
गया है। जैसे कि जन्म-जन्मान्तर पर्यन्त अर्थात् युगों-युगों तक भूमिदान का फल मनुष्य के 
कुल, वंश, पितरों की कीर्ति गाथा को प्रसारित करता है। </p> <br></br>
<h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">भूमिदान क्यों करना चाहिए
</h1> <br></br>
<p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">
गरुड़ पुराण के अनुसार पितरों के निमित्त दिए जाने वाले दश महादानों में से एक 
है- भूमिदान। प्रायः शÕयादान, गोदान, अन्नदान, स्वर्णदान सुलभता से सम्पÂ हो जाते हैं, 
परन्तु भूमिदान देने के लिये अनुकूल व्यवस्था नहीं हो पाती है। अतः भूमिदान पितरों के प्रति 
एक ट्टण के रूप में हमारे साथ सदा रहता है। इस पितृ-_ण के मुक्ति एवं पितृ-दोष के 
निवारण हेतु अपने जीवन में एक बार अवश्य ही भूमिदान करना चाहिये।
अतः आप सभी से सविनय प्रार्थना है कि इस भूमिदान यज्ञ में आपनी यथासम्भव 
आहुति देकर पुण्य के भागी बनें।</p>

          <button class="flex mx-auto mt-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
        
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
