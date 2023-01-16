import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog,FaOm} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Mandir = () => {
  return (
    <div class="flex items-start w-full	 relative"	>
 <div className=" sticky  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-200 z-20  top-0 -left-96 lg:left-0 lg:w-72 relative ">
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
    
          <div class="overflow-auto px-5  pt-10 mx-auto">
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
        src="https://i.ibb.co/7y1X7BW/IMG20180921103836.jpg"
        class="block w-[300px] h-[500px] rounded-3xl"
        alt="Gaushala 1"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.ibb.co/xzWzhbd/IMG20200112101043.jpg"
        class="block w-[300px] h-[500px] rounded-3xl"
        alt="Gaushala 2"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
      src="https://i.ibb.co/f8nyvvc/page-2-1.jpg" 
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 3"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
       src="https://i.ibb.co/qxyQc59/page-2-5.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 4"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
      src="https://i.ibb.co/f8nyvvc/page-2-1.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 5"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
      src="https://i.ibb.co/D4zMNK9/IMG-20170331-104229.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 6"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.ibb.co/BsNrZPL/IMG-20170331-104238.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 7"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
       src="https://i.ibb.co/1fyS66F/IMG20180713104656.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 8"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
       src="https://i.ibb.co/jGYpvph/IMG20180727101702.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 9"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://i.ibb.co/Wp11m3c/IMG20180727101735.jpg"
        class="block w-[800px] h-[500px]  rounded-3xl"
        alt="Gaushala 10"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
src="https://i.ibb.co/WfCWxdW/IMG20180921100435.jpg"
        class="block w-[400px] h-[500px]  rounded-3xl"
        alt="Gaushala 11"
      />
      
    </div>
    <div class="carousel-item float-left w-full">
      <img
     src="https://i.ibb.co/Fz06Bx2/IMG20180921103417.jpg"
        class="block w-[300px] h-[500px]  rounded-3xl"
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
         <p class="mt-2 p-1 text-3xl text-center font-semibold  mb-1 text-shadow-xl text-white">श्रीनिवास वेंकटेश मन्दिर (तिरुपति बाला जी)  </p>
         </div>
          <p class=" mx-auto justify-between text-justify leading-[30px] text-xl">
	श्रीनिवास सेवार्थ न्यास एवं श्रीनिवास संस्कृत विद्यापीठम् के संस्थापक अध्यक्ष वैकुण्ठवासी स्वामी श्रीगोविन्दाचार्य जी को लगभग 5 वर्ष पूर्व बारम्बार श्रीनिवास वेंकटेश भगवान् सपने में आने लगे। आप प्रतिदिन सपने में तिरुपति जा रहे हैं या दर्शन कर रहे हैं या परिक्रमा लगा रहे हैं। कभी दर्शन मिलता है और कभी नहीं मिलता है तो फिर रोने लगते हैं। ऐसा लगभग डेढ़ महीने तक हुआ तो आपने अनेक लोगों से सम्पर्क किया कि ऐसा क्यों हो रहा है! बहुत लोगों ने बताया कि भगवान् आपके यहाँ आकर आपसे सेवित होना चाहते हैं। अतः आप उनके मन्दिर की व्यवस्था कीजिए। एक भक्त ने तो निर्माण आरम्भ करने के लिए कुछ रुपये तत्काल दे दिये। पैसे लेने के बाद तो आप मन्दिर निर्माण के लिए बाध्य हो गये। पहले श्री आचार्य जी का निर्णय था कि हम शिक्षा और सेवा के क्षेत्र में कार्य कर रहे हैं तो भगवान् की सेवा में पर्याप्त समय नहीं दे पायेंगे। अतः केवल शालिग्राम भगवान् की सेवा की जाय। अतः पन्द्रह वर्षों से मन्दिर बनाने के विषय में सोचा ही नहीं था किन्तु अब भगवान् स्वयं आना चाहते हैं तो मन्दिर भी बनाना आवश्यक हो गया। जिस दिन मन्दिर का शिलान्यास किया गया, उस दिन से आचार्यश्री को वैसे सपने आने बन्द हो गये। इसका सीधा-सीधा तात्पर्य है कि भगवान् स्वयं यहाँ आकर पूजित होना चाहते थे। अतः भगवदिच्छा से ही इब्राहिमपुर, दिल्ली में भगवान् की स्थापना की गयी। आचार्यश्री के शिक्षा एवं दीक्षा के गुरु स्वाचार्यवर्य वैकुण्ठवासी षडाचार्य अनन्तश्रीविभूषित श्रीमुक्तिनारायण-रामानुज-जीयर (षडाचार्य) स्वामी जी महाराज से भी यह आदेश हुआ था कि भविष्य में यदि तुम मन्दिर बनाने की सोचो तो श्रीवेंकटेश भगवान् की स्थापना और उनकी आराधना करना। इसी के फलस्वरूप देश-विदेश ख्यातिप्राप्त आचार्यों, स्वामीजीवर्ग, सन्त-महन्त, भागवतजनों एवं भक्तों की महनीय उपस्थिति में बड़े ही धूमधाम धाम के साथ इब्राहिमपुर के विद्यापीठ में श्रीरामानुजाचार्यस्वामीजी, श्रीदेवी, भूदेवी सहित श्रीवेंकटेश भगवान् (तिरुपति बालाजी) की प्राणप्रतिष्ठा (प×चदिवसीय मूर्तिस्थापना) सम्पन्न हो गयी है। विक्रम संवत् üúझ्þ का वर्ष भक्ति एवं प्रपत्तिमार्ग से जीवमात्र की मुक्ति हेतु अवतार लिये हुए जगद्गुरु श्रीरामानुजाचार्यस्वामीजी का अवतार-सहस्राब्दी वर्ष भी है। अतः यह सहस्राब्दी महोत्सव मनाने का भी सौभाग्य प्राप्त हुआ। 
	भगवान् की प्राणप्रतिष्ठा के अवसर पर वृन्दावनस्थ श्रीरंगमन्दिर के अध्यक्ष गोवर्धनपीठाधीश्वर अनन्तश्रीविभूषित श्रीगोवर्धनरंगाचार्य स्वामी जी महाराज ने अभिव्यक्त किया कि आज से लगभग नौ सौ वर्ष पूर्व के आस-पास में दिल्ली के बादशाह की कन्या के पास श्रीसम्पत्कुमार भगवान् विद्यमान थे और वह कन्या भगवान् से क्रीडा के साथ प्रेम भी करती थी। जब श्रीरामानुजाचार्य स्वामीजी ने बादशाह के पास आकर सम्पत्कुमार भगवान् को बुलवाया तो वे श्रीविग्रह ही चलकर श्रीस्वामीजी की गोद में आकर बैठ गये। अतः बादशाह ने भी कन्या सहित भगवान् को श्रीरामानुजस्वामीजी को प्रदान किया और उन्हें ले जाकर श्रीस्वामीजी ने कर्नाटक के यादवाद्रि पर विराजमान कराया। बाद में दिल्ली के बादशाह इब्राहिम लोदी भी हुए थे। समय इतिहास को दोहराता है कि आज नौ सौ वर्षों के बाद फिर दक्षिणभारत से ही आकर तिरुपति बालाजी श्रीवेंकटेश भगवान् यमुनातट में विद्यमान दिल्ली के इब्राहिमपुर, रामानुजमार्ग में प्रतिष्ठित हो गये हैं। भगवान् के अनेक रूपों में अर्चाविग्रह भक्तों के कल्याणार्थ ही होता है। अर्चाविग्रह में भगवान् के सौलभ्य, सौशील्य आदि अनेक गुण प्रकट होते हैं। भगवान् स्वयं ही भक्तों पर कृपा करके अर्चाविग्रह स्वीकार करते हैं। दिल्लीवासी सभी लोगों का सौभाग्य है कि भगवान् स्वेच्छा से अर्चाविग्रह रूप में इब्राहिमपुर में वेद, उपनिषद्, पुराणों की वेदध्वनि से गुंजायमान इस मन्दिर में पधारे हुए हैं।
	विदित हो कि उक्त प्राणप्रतिष्ठा के अवसर पर ही वृन्दावनस्थ श्रीरंगमन्दिर के अध्यक्ष गोवर्धनपीठाधीश्वर अनन्तश्रीविभूषित श्रीगोवर्धन-रंगाचार्य स्वामी जी महाराज ने श्रीगोविन्दाचार्य जी को यहाँ मन्दिर के मुख्य कैंकर्यकर्ता (महन्त) के रूप में और श्रीजनार्दनाचार्य श्रीनिवास रामानुज दास (जीवन शर्मा) को उनके उत्तराधिकारी के रूप में मंगलाशासन किया। 
	भगवदाराधना पा×चरात्रगम के अनुसार वैदिक पद्धति से प्रातः काल 5 बजे से लेकर रात्रि 9 बजे तक प्रशिक्षित योग्य वैदिक पुजारियों एवं पाठशाला के समस्त छात्रें द्वारा वेद-उपनिषद्-पुराणादि के पारायण (पाठ) के साथ होती है। जहाँ भगवान् श्रीवेंकटेश जी की विधि-विधान से आराधना पूजा होती है, उस क्षेत्र में धर्म, अर्थ, काम और मोक्ष ये चारों पुरुषार्थ सुलभ हो जाते हैं। 
<br ></br>
<div class="bg-orange-500 h-[50px] w-[390px] text-center rounded-3xl  font-bold text-2xl ml-[400px] text-white  font-medium">
भगवान् का अभिषेक (तिरुमंजन)<br></br></div>
	प्रत्येक शुक्रवार और पुष्य नक्षत्र को कुल मिलाकर महीने में पाँच दिन भगवान् श्रीवेंकटेश जी का विशेष अभिषेक (तिरुमंजन) होता है। यह अवश्य दर्शनीय है। इसके अतिरिक्त रामनवमी, कृष्णजयन्ती में भी तिरुमंजन होता है। नौ चाँदी के कलशों में गंगा, यमुना का जल, दूध, दही, घी, शहद और फलों का रस तथा ओषधियों से परिपूर्ण करके उनकी स्थापना करने के पश्चात् उन्हीं कलशों से भगवान् का शास्त्रीय विधि से खुला स्नान होता है। तैत्तिरीयोपनिषद् की शिक्षावल्ली, आनन्दवल्ली एवं भृगुवल्ली का सामूहिक पाठ होता है। न्यूनतम ग्यारह लीटर दूध स्नान में प्रयोग किया जाता है। भक्तों की श्रद्धा पर दूध की मात्र 21, 31 एव इससे अधिक लीटर भी हो सकती है। भगवान् का अभिषेक कराने से धर्म, अर्थ, काम और मोक्ष चारों पुरुषार्थों प्राप्ति होती है। यह निष्काम भाव से करने पर मोक्ष की प्राप्ति होती है तो कामना से कराने पर मनोरथों की सिद्धि हो जाती है। यह अभिषेक यदि कोई भक्त अपनी ओर से करवाना चाहे तो उनके संकल्प से भी किया जाता है। इसका खर्च लगभग 3100/- रूपये आता है। राजभोग लगाना चाहें तो इसका व्यय 5100/- के आसपास अलग से होता है। तिरुमंजन की महा आरती में उपस्थित होने वाले सभी भक्तों को राजभोग का प्रसाद दिया जाता है।

</p>
          <button class="flex mx-auto mt-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
        
        </div>
        
       
        
        
      </div>
      
        
            </div>
  )
}
