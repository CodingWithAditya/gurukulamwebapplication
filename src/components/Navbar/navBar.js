import React from 'react'

const Navbar = () => {
  return (
    <header class="h-24 sticky top-0 z-50">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 pb-4 h-full dark:bg-red-900">
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