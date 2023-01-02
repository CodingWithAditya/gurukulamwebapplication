import React from 'react'
import {
  MdOutlineLibraryBooks,
  MdOutlineMedicalServices,
  MdOutlineHome,
MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Blog = () => {
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
  <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl overflow-auto h-[1000px] px-5  pt-10 mx-auto   ">

        <div class="flex flex-col items-center sm:px-5 md:flex-row ">
            <div class="w-full md:w-1/2">
                <a href="#_" class="block">
                    <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg"/>
                </a>s
            </div>
            <div class="flex flex-col items-start justify-center ws-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span>Featured</span>
                    </div>
                    <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Savory Templates. Sweet Designs.</a></h1>
                    <p class="pt-2 text-sm font-medium">by <a href="#_" class="mr-1 underline">John Doe</a> · <span class="mx-1">April 23rd, 2021</span> · <span class="mx-1 text-gray-600">5 min. read</span></p>
                </div>
            </div>
        </div>

        <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg"/>
                </a>
                <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Lifestyle</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
                <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workout.jpg"/>
                </a>
                <div class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Health</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Healther Version of Yourself</h2>
                <p class="text-sm text-gray-500">If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Fred Jones</a> · <span class="mx-1">April 10, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/food.jpg"/>
                </a>
                <div class="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Food</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Enjoy the Meals of the Kings</h2>
                <p class="text-sm text-gray-500">Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mike Roberts</a> · <span class="mx-1">April 6, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/books.jpg"/>
                </a>
                <div class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Motivation</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Writing for Success</h2>
                <p class="text-sm text-gray-500">Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Tom Johnson</a> · <span class="mx-1">May 25, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/clock.jpg"/>
                </a>
                <div class="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Business</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Simple Time Management</h2>
                <p class="text-sm text-gray-500">Managing your time can make the difference between getting ahead in life or staying exactly where you are.</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Scott Reedman</a> · <span class="mx-1">May 18, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/lemons.jpg"/>
                </a>
                <div class="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Nutrition</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Fruits Life</h2>
                <p class="text-sm text-gray-500">Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Jake Caldwell</a> · <span class="mx-1">May 15, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

        </div>
    </div>
 
    </div>
  )
}
