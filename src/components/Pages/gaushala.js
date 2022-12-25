import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'tw-elements';
 
export const Gaushala = () => {
  
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
       
 
<div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-10 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
     <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
     <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>
        <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="6"
      aria-label="Slide 7"
    ></button>
        <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="7"
      aria-label="Slide 8"
    ></button>
        <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="8"
      aria-label="Slide 9"
    ></button>
        <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="9"
      aria-label="Slide 10"
    ></button>
   
  </div>
  <div class="carousel-inner relative w-full ml-48 mb-2 overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="https://i.postimg.cc/ydR2j6JH/DSC-0149.jpg"
        class="block w-[800px] h-[500px] rounded-3xl"
        alt="Gaushala 1"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/3xb6H0mh/DSC-0150.jpg"
        class="block w-[800px] h-[500px] rounded-3xl"
        alt="Gaushala 2"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/pVY6L6zq/DSC-0151.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 3"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/tRhLVTQd/Gaushala-1.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 4"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/ZnF2kfFs/Gaushala-2.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 5"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/vmgK88tV/IMG20190605153958.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 6"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/hjV3xCw4/IMG20190605153959.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 7"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/1XP7KGhG/IMG20190605154028.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 8"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/vmJN4R0S/IMG20190605154028-01.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 9"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/bNgW3Bvs/Gaushala.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 10"
      />
      
    </div>
    
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-[190px]"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat mr-32" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-[110px]"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon  inline-block bg-no-repeat mr-32" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          <h2 class="text-[10px] text-center text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
          <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">श्रीनिवास गौशाला</h1>
          <p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">कामधेनु वंश की गौमाताओं की सेवा हेतु एक गौशाला संचालित है। गौशाला का मुख्य उद्देश्य गुरुकुल में पढने वाले बालकों के लिये गोदुग्ध का पोषण प्राप्त हो। वर्तमान में अभी 30 के लगभग गोवंश हैं।</p>
          <button class="flex mx-auto mt-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
        
        </div>
        
       
        
        
      </div>
      
       
            </div>
  )
}
