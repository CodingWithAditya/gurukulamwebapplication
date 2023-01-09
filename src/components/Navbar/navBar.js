import React from 'react'

const Navbar = () => {
  return (
    <header class="h-24 sticky top-0 z-50 mb-12">
<div class=" flex bg-red-900">
   
   <a  href="https://www.facebook.com/gurukulsanskritam" class="ml-2 bg-blue-700 p-2 font-semibold mt-2 text-white mr-2 inline-flex items-center space-x-2 rounded-2xl">
          <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a  href="https://twitter.com/jeevan_jsrd" class="bg-blue-500 p-2 font-semibold mr-2 text-white mt-2 inline-flex items-center space-x-2 rounded-2xl">
        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
        </a>
        <a  href="https://www.youtube.com/channel/UCS-Y1rhheXkwosebU1TRzhg" class="bg-red-500 p-2 mt-2 font-semibold text-white inline-flex items-center space-x-2 rounded-2xl">
        <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
        </a>
  
   <img src={require('../../images/head1.png')} alt="log3-copy" border="0" class="h-12 ml-[430px] " />
   

   <a href="#_" class="mt-2 ml-[430px] relative inline-flex items-center justify-center inline-block p-2  px-2 py-2 overflow-hidden font-medium text-indigo-600 rounded-3xl shadow-2xl group">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span class="relative   font-semibold text-white">Contact Us</span>
</a>
   </div>
    <nav class="bg-red-900 border-gray-200 px-4 lg:px-6 pb-4 h-full dark:bg-red-900">

        <div class="flex flex-wrap items-center ml-14  max-w-screen-2xl">
        
            <img src={require('../../images/headerlogo.png')} alt="log3-copy" border="0" class="mb-3 sm:h-16" />
            <img src={require('../../images/gurukul.png')} alt="main-logo" border="0" class="pb-2 h-28"/>
            <img src={require('../../images/logos.png')} alt="logo-3" class="mb-3 sm:h-16"/>
            
            
           
        </div>
    </nav>
</header>
  )
}
 export default Navbar