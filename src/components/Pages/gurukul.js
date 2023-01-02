
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

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
    export const Gurukul = () => {
      
      
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
  </div>
  <div class="carousel-inner relative w-full ml-48 overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src={require('../../images/groupphoto.JPG')}
        class="block w-[700px] h-[400px] rounded-3xl"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={require('../../images/Aayurvedicaushadhalay.JPG')}
        class="block w-[700px] h-[400px] rounded-3xl"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={require('../../images/Gaushala.JPG')}
        class="block w-[700px] h-[400px]  rounded-3xl"
        alt="Exotic Fruits"
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
      
    <div class="  flex flex-col  w-full mb-10 mt-4">
   
        

      
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">श्रीनिवास संस्कृत विद्यापीठम् </h1>
      <p class=" mx-auto justify-between text-justify leading-[40px] text-xl">गुरुकुल का संचालन (छात्रें के आवास, भोजन, वस्त्र, पुस्तक, औषधोपचार, अध्यापकों का वेतन आदि व्यवस्था करने के लिए श्रीनिवास संस्कृत विद्यापीठम् के नाम से सोसाइटी एक्ट 1861 के तहत पंजीकृत किया गया है, जिसे 12-A एवं 80 G की मान्यता प्राप्त है। इस संस्था के माध्यम से पाठशाला की सम्पूर्ण व्यवस्था, भोजन, आवास, वेतन, संस्कृत-पत्रिका प्रकाशन, संस्कृत प्रशिक्षण आदि संस्कृत से जुड़े सभी कार्य यथासम्भव सेवा के रूप में किये जाते हैं।
	इसी तरक का एक गुरुकुल/पाठशाला वैकुण्ठवासी स्वामी श्री गोविन्दाचार्य जी द्वारा सर्वप्रथम पुष्पित हुआ श्रीनिवास संस्कृत विद्यापीठम्। यह एक संस्कृत गुरुकुल है। वर्तमान में इसमें 70 विद्यार्थी निःशुल्क वेद, वेदांग, वेदान्त, दर्शन, साहित्य, अंग्रजी, विज्ञान, कम्प्यूटर, योग आदि का निःशुल्क प्रशिक्षण प्राप्त कर रहे हैं। इस गुरुकुल में 70 विद्यार्थी सहित 100 लोग भोजन, वस्त्र, रोगोपचार सहित निःशुल्क आवास करते हैं। 
	गुरु जी के दृढ़ लक्ष्य एवं आश्रमस्थ सभी छात्रें तथा अध्यापकों के परिश्रम के फलस्वरूप यह विद्यापीठ दूर-दूर क्षेत्रें व देशों में विद्वत्समाज एवं जनसमाज का प्रशस्तपात्र रहा है।  <br></br>
  <br></br>
  <div class="relative justify-center ml-32">
  <button type="button" class=" inline-block px-[50px] py-2 ml-[350px] bg-orange-600   text-white font-bold text-2xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">नम्र निवेदन </button>
  <div class="block p-2 rounded-lg shadow-xl bg-yellow-200 w-[1000px] mb-10">
  

    <p class="text-blue-700 font-medium text-l mb-4">
    एक बच्चे की शिक्षा, भोजन, वस्त्र आदि में मासिक पच्चीस सौ रूपये  (<b>3100</b>) का खर्च आता है। अतः सभी लक्ष्मीकृपासम्पन्न श्रद्धालु महानुभावों से निवेदन है कि एक या एक से अधिक बच्चों का खर्च वहन करके भारतीय संस्कृति एवं हमारे ट्टषि महर्षि द्वारा प्रदत्त ज्ञान परम्परा के आधारभूत शास्त्रें की रक्षा कर धार्मिक एवं सामाजिक कार्य के सहयोगी बन अक्षय पुण्य के भागी बनें। यह कार्य अकेले या अनेक व्यक्ति मिलकर कर सकते हैं।
    </p>
    
  </div>
</div>

	यहाँ के छात्रें की उपलब्धियाँ - <br></br>  <br></br>
  <div class="transform transition duration-500 hover:scale-105  flex justify-center mb-10 ">
  <div class="flex flex-col md:flex-row w-[1100px] rounded-lg bg-white shadow-md hover:shadow-2xl">
    <img class=" w-full h-[200px] md:h-auto object-cover md:w-[400px] rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.postimg.cc/qq0LwSVG/DSC-0046.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
     
      <p class="text-gray-700 text-xl  leading-relaxed mb-4">
      जून 1999 से लेकर दिसम्बर 2017 तक श्रीगोविन्दाचार्यजी के मार्गदर्शन, संस्थापकत्व एवं संचालकत्व में संचालित विभिन्न शिक्षण संस्थाओं की प्रगति यह है कि 7 छात्र चीफ (विद्यावारिधि) की उपाधि प्राप्त कर चुके हैं। लगभग 50 छात्र शोध में पंजीकृत हैं। 100 से अधिक छात्र (ठण्मक) (शिक्षाशास्त्री) कर चुके हैं और कई छात्र अभी प्रशिक्षणरत हैं। इसी तरह 200 से ज्यादा छात्रें ने आचार्य  की उपाधि प्राप्त कर ली है और अभी 300 से अधिक छात्र विभिन्न कक्षाओं में अध्ययनरत हैं। मुख्यशाखा दिल्ली की है और इसमें सबसे अधिक लगभग 70 छात्र होते हैं।   
      </p>
      <button class="flex mx-auto mt-[10px] ml-[1px] text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
       
    </div>
  </div>
</div>
<div class="flex justify-center mb-10">
 
  <div class="flex justify-cente  transform transition duration-500 hover:scale-105 hover:shadow-2xl">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src="https://i.postimg.cc/gj9ZcbSy/adsdsada.png" alt=""/>
    </a>
    <div class="p-6">

      <p class="text-gray-700 text-lg break-normal	 mb-4">
      यहाँ के विद्यार्थियों ने राज्यीय, राष्ट्रिय, अखिल भारतीय स्तर पर  आयोजित शलाका परीक्षा, भाषण प्रतियोगिता, श्लोकान्त्याक्षरी प्रतियोगिता, सूत्रन्त्याक्षरी प्रतियोगिता, वाद-विवाद प्रतियोगिता, एकल श्लोकसंगीत प्रतियोगिता, नुक्कड़ नाटक आदि विभिन्न कार्यक्रमों में भाग ग्रहण कर प्रथम, द्वितीय आदि स्थानों को प्राप्त कर गौरवान्वित किया है। 
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Donate Now</button>
    </div>
  </div>
</div>
<div class="flex justify-center ml-5 transform transition duration-500 hover:scale-105 ">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src="https://i.postimg.cc/65cHjWQ4/DSC-0037.jpg" alt=""/>
    </a>
    <div class="p-6">
   
      <p class="text-gray-700 text-lg mb-4">
      यहाँ से पढे हुये छात्रें ने विभिन्न  विश्वविद्यालयों में जाकर बी-ए तथा एम-ए इत्यादि कक्षाओं में अनेक स्वर्णपदक प्राप्त किये हैं।
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Donate Now</button>
    </div>
  </div>
</div>
 
  <div class="rounded-lg shadow-lg ml-5 bg-white max-w-sm transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <a href="#!">
      <img class="rounded-t-lg" src="https://i.postimg.cc/yNtpmL8f/DSC-0026.jpg" alt=""/>
    </a>
    <div class="p-6">
      
      <p class="text-gray-700 text-lg mb-4">
      यहाँ से शिक्षा प्राप्त किये हुये अनेक छात्र भारत तथा नेपाल, अमेरिका इत्यादि देशों में विभिन्न विश्वविद्यालयों में प्राफेसर, लेक्चरर इत्यादि पदों पर रहकर संस्कृत एवं संस्कृति प्रचार प्रसार में संलग्न है। 
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Donate Now</button>
    </div>
  </div>
</div> 

	
</p>
      
       <button class="flex mx-auto mt-[10px] text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
       

       <h2 class="text-[10px] text-center mt-12 text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">गुरुकुल एवं छात्रें की संयुक्त समय-सारिणी </h1>
     
       <p class="  justify-between text-justify leading-relaxed text-xl">1. आश्रम के सभी छात्र, अध्यापक एवं पुजारीगण प्रातः 3ः45 बजे उठ जाते हैं।<br></br><br></br>
2.  तत्पश्चात् 4ः30 तक स्नान करके 4ः30 से सभी सन्ध्यावन्दन करते हैं।<br></br><br></br>
3. प्रातः 5 बजे कुछ छात्र सुप्रभातम् आदि का पाठ करते हैं तो अर्चकगण कहाली और घण्टध्वनि के साथ मन्दिर में प्रवेश करते हैं। कुछ आचार्य 12 वर्ष से ऊपर के छात्रें के साथ योगासन का अभ्यास कराते हैं। कुछ छात्र हवन प्रारम्भ करते हैं। इस तरह छात्रें में कार्य बाँट कर भगवान् की आराधना, सुप्रभातम्, हवन और योगासन का कार्य एक साथ चलता है। <br></br><br></br>
4. अर्चक मन्दिर में अन्दर की सफाई के साथ जल भरने आदि कार्य करके 	भगवान् को जगाते हैं और अर्घ्य, पाद्य, धूप, दीप करके मोदक (लड्डू) और दूध का भोग लगाकर ठीक 5ः30 बजे मंगला आरती करते है। इसके बाद भगवान् शालिग्राम का स्नान और मूलविग्रह एवं उत्सव-विग्रह का श्रृंगार करके फल भोग लगाकर ठीक 7ः00 बजे बड़ी आरती होती है। 	 आरती में सुमघõलं स्तोत्र, पुष्पा×जली, तुलसी अर्चना, दिव्यप्रबन्ध, कर्पूर आरती के बाद गुरुपरम्परा पाठ करते हुए तीर्थ (चरणामृत) और भगवान् के चरणों में अर्पित तुलसीपत्र का वितरण, शठारि (भगवान् के श्रीचरणों का भक्तों के शिर से स्पर्श कराना) के साथ भोग लगा हुआ फलप्रसाद वितरण व लघु कीर्तन होता है। शाम की बड़ी आरती में भी यही क्रम है।
	कुछ अध्यापक प्रातः 6 से 7 बजे तक छात्रें का शास्त्रभ्यास कराते हैं।<br></br><br></br>
5. आरती के पश्चात् 7ः30 से 8ः30 तक वैदिक सूक्त, लक्ष्मीस्तोत्र एवं श्रीमद्भागवत महापुराण का नित्य पाठ होता है और आचार्यश्री के मुखारविन्द से गीता आदि शास्त्रें पर प्रवचन भी होता है।<br></br><br></br>
6.	प्रातः 8ः30 बजे भगवान् को अन्न का बालभोग लगता है और उसके बाद छात्रें सहित सभी लोग बालभोग का प्रसाद नाश्ते के रूप में ग्रहण करते हैं।<br></br><br></br>
7.	इसके बाद मन्दिर में वेद, पुराणादि शास्त्रें का पारायण चलता रहता है।<br></br><br></br>
8.	9ः00 बजे से 12ः00 बजे तक छात्रें को आचार्यगण वेदाभ्यास (अध्ययन), गणित, अंग्रेजी, संगीत का अध्यापन कराते हैं। <br></br><br></br>
9.	मध्याह्न 12 बजे राजभोग के बाद भगवान् की आरती होती है। उसके बाद मन्दिर का पट बन्द हो जाता है और सभी आश्रमवासी राजभोग का प्रसाद (भोजन) ग्रहण करते हैं।<br></br><br></br>
10.	मध्याह्न 1 बजे से 4 बजे तक छात्रगण व्याकरण, काव्य, कोष, हिन्दी कम्प्यूटर आदि का अध्ययन करते हैं।<br></br><br></br>
11.	शाम 4 बजे से भगवान् का पट खुलता है और दूध तथा मोदक का भोग लगाकर मंगला आरती करते हैं।<br></br><br></br>
12.	छात्रगण 4 से 6 बजे तक अपने कपड़े धोना और सफाई आदि का कार्य करते हैं।<br></br><br></br>
13.	सन्ध्यावन्दन ग्रीष्मकाल में शाम को 6 बजे और शीतकाल में शाम को 5 बजे होता है।<br></br><br></br>
14.	तत्पश्चात् मन्दिर में विविध स्तोत्रें का पारायण होता है।<br></br><br></br>
15.	शाम को चने का भोग लगाकर शीतकाल में ठीक 6 बजे और ग्रीष्मकाल में शाम ठीक 7 बजे महा आरती होती है। तत्पश्चात् तीर्थ-प्रसाद वितरण व कीर्तन होता है।<br></br><br></br>
16.	रात्रि का राजभोग 8 बजे होता है और छोटी आरती होती है। इसके बाद सभी लोग भोजन प्रसाद ग्रहण करते हैं।<br></br><br></br>
17.	बीच-बीच में छात्रगण अपने पाठ का अभ्यास करते रहते हैं।<br></br><br></br>
18.	रात्रि को 9 बजे दूध भोग लगाकर शयन आरती होती है।<br></br><br></br>
19.	इस तरह प्रतिदिन भगवान् को आठ बार भोग लगाया जाता है।<br></br><br></br>
20.	रात्रि 9 बजे दुग्धपान करके छोटे छात्र सो जाते हैं और और बड़े छात्र 10 बजे शयन करते हैं।<br></br><br></br>
</p>
<a href="#_" class="px-[30px] ml-[250px] py-2.5 w-[700px] relative rounded group overflow-hidden font-medium bg-purple-600 text-white inline-block">
<span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-8 00 group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white"> भोजन आदि व्यवस्था का व्यय-विवरण ,छात्र, अध्यापक, कर्मचारी एवं सन्तों की संख्या-100
</span>
</a>
<div class="flex flex-col">

  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-800 border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              वस्तु 
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              दैनिक
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              मासिक
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              वार्षिक
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">1</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              चावल
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              12 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              360 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              4320 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              आटा
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              12 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              360 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              4320 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">3</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              दाल(अरहर, चना, मूंग, ऊड़द)
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              5 किलो	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              150 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1800 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">4</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              चना काले
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              4 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              120 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1440 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">5</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              देशी घी
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1-5 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              45  किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              540  किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">6</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              चीनी
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              3 किलो	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              90 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1080 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">7</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              रिफाइण्ड तेल
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1 लीटर
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              30 लीटर
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              360 लीटर
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">9</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              सब्जी (आलू एवं सीजन की)
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              20 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              600 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              7200 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">10</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              जीरा, हन्दी, धनिया, मसाला	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            	30 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              360 किलो 
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">11</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              नमक
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              --
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            	30 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              360 किलो
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">12</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              मेथी, सरसों, काली मिर्च 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1-1 किलो
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              12-12 किलो  
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">13</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              हवन, पूजन, अखण्डज्योति 
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              700/-	रूपये
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              21000/- रूपये
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              252000/- रूपये
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">14</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              पुस्तक, कापी, पेन, स्टेशनरी	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
       ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              30000/- रूपये
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">15</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              दिन का भोजन- दाल, चावल, रोटी, सब्जी, चना	
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              5000/-रूपये
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
   ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">16</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              खीर, पूड़ी, दो सब्जी का एक समय का भोजन
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              5100/- से 7100/-
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
   ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">17</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              सभी छात्रें के लिए वर्ष भर वस्त्र आदि
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
   ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              300000/-
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">18</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              अध्यापक/कर्मचारियों का मासिक वेतन
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              90000/-
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">19</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              बिजली/पानी/टेलीफोन का मासिक खर्च
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              20000/-
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">20</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              एक महीने का भोजन का सम्पूर्ण खर्च
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              150000/-
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ---
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">21</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              एक गौ का मासिक चारा, भूसा, दाना का खर्च
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
   ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              150000/-
              </td>
            </tr> <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-m font-medium text-gray-900">22</td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              एक महीने का भोजन का सम्पूर्ण खर्च
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
   ---
              </td>
              <td class="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              150000/-
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
    
   
    
    
</div>
        </div>
      )
    }
    