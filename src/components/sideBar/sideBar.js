import React from 'react';
import { useState } from 'react';
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
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
      <Link to="/bhoomidaan">
<a href="#_" class=" rounded-lg top-[208px]  rounded-3xl   right-[10px]  z-20 relative inline-flex items-center justify-start py-3 pl-4 pr-[100px]  overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-300 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class=" relative w-full text-2xl transition-colors duration-200 ease-in-out group-hover:text-red-600">भूमिदान </span>

 

</a>

</Link>
   


   
     

  <div class="mb-4">
   

  <img src={require('../../images/bannerguru.jpg')}class="max-w-full h-[550px] rounded-lg relative " alt=""/>
  </div>
  <Link to="/gurukul">
  <a onClick={()=> setGoToBhoomi(true)} href="#_" class="top-[-298px]   right-[10px]  rounded-3xl  z-30 relative inline-flex items-center justify-start py-3 pl-4 pr-[50px]  overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-300 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative text-[20px]  transition-colors duration-200 ease-in-out group-hover:text-red-600 ml-[1px]">श्रीनिवास सेवार्थ न्यास  </span>
</a>
</Link>
<Link to="/gurukul">
<a onClick={()=> setGoToBhoomi(true)} href="#_" class="top-[-188px]   right-[270px] rounded-3xl  z-30 relative inline-flex items-center justify-start py-3 pl-4 pr-[50px]  overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-white group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-300 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative text-[18px] transition-colors duration-200 ease-in-out group-hover:text-red-600 ">श्रीनिवास संस्कृत विद्यापीठम  </span>
</a>
</Link>
  
  <button class="bg-orange-500 text-white font-bold  text-xl py-2 px-8 rounded-full absolute z-10  top-[100px]  right-[600px] ">
    
  DONATE NOW
</button>


<div class="ml-[420px]   -mb-[250px] z-20">
  

<ReactPlayer url={'https://www.youtube.com/watch?v=XKCGF0Ixd0A'} width={400} height={250}/>
</div>

<ReactPlayer url={'https://www.youtube.com/watch?v=XKCGF0Ixd0A'} width={400} height={250}/>

  </div>
  
  
 
<MyModal onClose={handleOnClose} visible={showMyModal}/>
<MyModal2 onClose={handleOnClose2} visible={Model2}/>
<MyModal3 onClose={handleOnClose3} visible={Model3}/>
<MyModal4 onClose={handleOnClose4} visible={Model4}/>

<div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-400 z-20  top-0 lg:left-[29px] lg:w-80 relative ">
  
<div class="mb-4">
    <img src={require('../../images/guruji.jpg')} class="w-[200px] h-[200px] rounded-full ml-5" alt=""/>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 mt-5">
  
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2">वैकुण्ठवासी स्वामी श्रीगोविन्दाचार्यजी </div>
    <p class="text-gray-700 text-base">
      
    विद्वद्वरेण्य श्री गोविन्दाचार्य जी का सम्पूर्ण जीवन संस्कृत एवं संस्कृति को समर्पित रहा। आपके जीवन का उद्देश्य था- शिक्षा, सेवा तथा साधना। </p>

    
    <button onClick={()=> setModel4 (true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-[60px] py-2 rounded-full mt-5">

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
export default SideBar
