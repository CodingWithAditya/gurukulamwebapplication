import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog,FaOm} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Samajik = () => {
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
    
          <div class="overflow-auto h-[1000px] px-5  pt-10 mx-auto">
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
            <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="10"
      aria-label="Slide 11"
    ></button>
            <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="11"
      aria-label="Slide 12"
    ></button>
  </div>
  <div class="carousel-inner relative w-full ml-48 mb-2 overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="https://i.postimg.cc/9frNw6CR/DSC-0021.jpg"
        class="block w-[800px] h-[500px] rounded-3xl"
        alt="Gaushala 1"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/cH39XfKd/DSC-0024.jpg"
        class="block w-[800px] h-[500px] rounded-3xl"
        alt="Gaushala 2"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/yNtpmL8f/DSC-0026.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 3"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/ncpRGjnt/DSC-0028.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 4"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/HWQvM4D2/DSC-0030.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 5"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/VkNK2xSG/DSC-0034.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 6"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/65cHjWQ4/DSC-0037.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 7"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/4yb8TZbM/DSC-0038.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 8"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/RZbgmgKM/DSC-0040.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 9"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/nLyTjM3g/DSC-0041.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 10"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/63CcdwS3/DSC-0044.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 11"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.postimg.cc/qq0LwSVG/DSC-0046.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 12"
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
        <div class="  flex flex-col  w-full mb-10">
          <div class="bg-orange-500 w-[390px] ml-[400px] mt-3 mb-4 rounded-[100px]   shadow-2xl">
         <p class="mt-2 p-1 text-3xl text-center font-semibold  mb-1 text-shadow-xl text-white">संचालित उल्लेखनीय गतिविधियाँ</p>
         </div>
          <p class=" mx-auto justify-between text-justify leading-[50px] text-xl">1.	आठ वर्ष से लेकर बीस वर्ष तक के बालकों को गुरुकुलीय परम्परानुसार वेद, वेदांग, व्याकरण, वेदान्त, कर्मकाण्ड, ज्योतिष, संगीत, अंग्रेजी, कम्प्यूटर 	आदि की विभिन्न  स्थानों में गुरुकुल के माध्यम से निःशुल्क शिक्षा। <br></br>
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
      
        
            </div>
  )
}
