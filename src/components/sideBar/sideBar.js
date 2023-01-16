import React from 'react';
import { useState } from 'react';
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog, FaOm} from "react-icons/fa";
import MyModal from './MyModal';
import MyModal2 from './MyModal2';
import MyModal3 from './MyModal3';
import MyModal4 from './MyModal4';
import ReactPlayer from 'react-player';
import { Switch,Route,Redirect } from 'react-router-dom';
import { Bhoomi } from '../Pages/Bhoomi';
import {Navigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import  {App}  from '../../../src/App'

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
            <Link to="/mandir">
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
    
    
      
      <div class=" relative   ml-5 mt-[-45px]" >
      
   


   
     

  <div class="mb-4">
   <div class="bg-orange-400 h-[540px] w-[920px] rounded-2xl mt-14"> 
   <img src={require('../../images/head2.png')} alt="log3-copy" border="0" class="h-20 ml-[260px] " />
   <Link to="/bhoomidaan-yojana">
<a  class=" ml-5 relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-blue-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white font-bold text-xl">भूमिदान </span>
</a>

</Link>
<Link to="/sewarth-nyas">
<a class="ml-[170px] relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white  font-bold text-xl">श्रीनिवास सेवार्थ न्यास  </span>
</a>

</Link>
<Link to="/sanskrit-vidyapeetham">
<a  class="ml-[110px] relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white  font-bold text-xl">श्रीनिवास संस्कृत विद्यापीठम्</span>
</a>

</Link>
<div class="bg-white h-[391px] w-[903px] ml-2 rounded-3xl mt-2">
<p class="text-gray-700 text-lg   font-medium  text-justify ml-1 mr-2 ">
  <br></br>
&nbsp; <b>शिक्षा </b>के अन्तर्गत वेद, वेदांग, वेदान्त, दर्शन, योग आदि वैदिक शिक्षा   के उत्कृष्ट विद्वान् तैयार करना साथ में अंग्रेजी, गणित, कम्प्यूटर इत्यादि आधुनिक शिक्षा भी प्रदान करना। 
<b>	सेवा </b>के अन्तर्गत गरीब, असहाय, निर्धन बच्चों को निःशुल्क पालन-पोषण व शिक्षा देना। गरीब, असहाय लोगों को निःशुल्क रोगोपचार व औषधि प्रदान करना। 
	<b>साधना</b> के अन्तर्गत योग, प्राणायाम, आयुर्वेद, प्राकृतिक चिकित्सा एवं आध्यात्मिक शिक्षा एवं नियमित अभ्यास के माध्यम से समाजसेवा।

        </p>
<p class="text-gray-700 text-lg  font-medium  text-justify ml-1 mr-2 ">
  
<br></br>परमपूज्य गुरुदेव वैकुण्ठवासी स्वामी श्री गोविन्दाचार्य जी ने पहले कभी विश्वगुरु कहे जाने वाले हमारे देश की दिव्य प्राचीन संस्कृति को पुनः संरक्षण देने हेतु अपने जीवन काल में 1000 से अधिक सुयोग्य विद्वान् तैयार करने का लक्ष्य लेकर दिल्ली, जयपुर, पंचकूला इत्यादि विभिन्न स्थलाें में 10 से अधिक गुरुकुलों की स्थापना की, जहाँ वर्तमान में लगभग 400 से अधिक संख्या में छात्र निःशुल्क भोजन, आवास सहि अध्ययन कर रहे हैं। 
इन गुरुकुलाें के माध्यम से पूरे देश को ऐसे विद्वान् समर्पित कर सकें, जिनसे आदर्श समाज के साथ-साथ आदर्श राष्ट्र का निर्माण हो। अतः गुरुकुल की दिनचर्या ऐसी हो जिसमें वटुक ब्रह्मचारी शिक्षा सेवा तथा साधना इन तीनाें का ज्ञान प्राप्त कर सकें तथा राष्ट्र की सेवा भी हो सकें।
	इसी उद्देश्य से आपश्री के द्वारा सर्वप्रथम स्थापित एवं संचालित गुरुकुल है दिल्ली के बुराड़ी में स्थित श्रीनिवास संस्कृत विद्यापीठम्। यहीं पर आपने गुरुकुल के साथ गौशाला, निःशुल्क आयुर्वेदिक औषधालय, निःशुल्क हृदयरोग क्लीनिक एवं श्रीनिवास वेंकटेश भगवान (तिरुपति बालाजी) मन्दिर इत्यादि सामाजिक प्रकल्पाें की भी स्थापना की।

      </p>
</div>
   </div>

  
  </div>
 
  


<div class="ml-[420px]   -mb-[250px] z-20">
  

<ReactPlayer url={'https://www.youtube.com/watch?v=XKCGF0Ixd0A'} width={400} height={250}/>
</div>

<ReactPlayer url={'https://www.youtube.com/watch?v=XKCGF0Ixd0A'} width={400} height={250}/>

  </div>
  
  
 
<MyModal onClose={handleOnClose} visible={showMyModal}/>
<MyModal2 onClose={handleOnClose2} visible={Model2}/>
<MyModal3 onClose={handleOnClose3} visible={Model3}/>
<MyModal4 onClose={handleOnClose4} visible={Model4}/>

<div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-500 z-20  top-0 lg:left-[15px] lg:w-[303px] relative ">
  
<div class="mb-3 -mt-5" >
    <img src={require('../../images/guruji.jpg')} class="w-[180px] h-[190px] rounded-full  ml-5" alt=""/>
    <div class="bg-white h-[150px] w-[233px] mt-2 -ml-1 p-2 rounded-3xl">
    <div class=" text-black text-[12px] font-semibold  ml-3">
      वै .वा अनन्तश्रीविभूषित वैकुण्ठवासी
    </div>
    
  
    <div class="bg-orange-500 w-[220px] -ml-[5px] -mt-2 mb-4 rounded-[100px]   shadow-2xl">
  <p class="mt-2 p-1 text-lg text-center font-semibold  mb-1 text-shadow-xl text-white"> स्वामी श्रीगोविन्दाचार्यजी</p>
  </div>

  <div class=" text-black font-medium -mt-3 ml-8 text-l">
      (संस्थापक  अध्यक्ष ) 
    </div>
    <div class=" text-black font-semibold mt-1 ml-5 text-l">
    श्रीनिवास सेवार्थ न्यास
    </div>
    <div class=" text-black font-semibold -mt-1 ml-2 text-l">
    श्रीनिवास संस्कृत विद्यापीठम्
    </div>
    </div>

    <div class="h-1 bg-white text-white mt-4">

    </div>
    <img src="https://i.postimg.cc/3R4frnV5/IMG-0559.jpg" class="w-[180px] h-[180px] rounded-full  mt-5 ml-10" alt=""/>
    <div class="bg-white h-[90px] w-[253px] mt-2 -ml-4 p-2 rounded-3xl">
   
  
    <div class="bg-orange-500 w-[250px] -ml-[7px] -mt-2 mb-4 rounded-[100px]   shadow-2xl">
  <p class="mt-2 p-1 text-xl text-center font-semibold  mb-1 text-shadow-xl text-white">स्वामी श्री जनार्दनाचार्य जी </p>
  </div>

  <div class=" text-black font-medium -mt-3 ml-12 text-l">
      (डॉ . जीवन शर्मा  ) 
    </div>
    <div class=" text-black font-semibold -mt-1 ml-8 text-l">
 वर्तमान महंत एवं अध्यक्ष 
    </div>
    
    </div>

    

 




  
      

  


  </div>
       </div>
      

  </div>
  
  
  
  
  )
}
export default SideBar
