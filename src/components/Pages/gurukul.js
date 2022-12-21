    import React from 'react'
    import {
      MdOutlineLibraryBooks,
      MdOutlineMedicalServices,
      MdOutlineHome,
    MdOutlineLogout,
  } from "react-icons/md";
  import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
  import { Link } from 'react-router-dom';
    
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
    <div class="  flex flex-col  w-full mb-10">
    <div class="flex flex-wrap justify-center">
  <img
 src={require('../../images/ashrambuilding.jpg')}
  class="p-1 bg-white border rounded w-[750px] h-[450px] mb-2"
  alt="..."
/>
</div>
      <h2 class="text-[10px] text-center text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">श्रीनिवास सेवार्थ न्यास</h1>
      <p class=" mx-auto justify-between text-justify leading-relaxed text-2xl">श्रीनिवास सेवार्थ न्यास एक नो प्रॉफिट नो लॉस की नीति लेकर शिक्षा, सेवा, साधना के माध्यम से समाजसेवा के लिए समर्पित पब्लिक चैरिटेबल ट्रस्ट है, जिसके संस्थापक वैकुण्ठवासी स्वामी श्री गोविन्दाचार्य जी (गोविन्द प्रसाद शर्मा) हैं। यह न्यास (ट्रस्ट) दिल्ली रजिस्ट्रार कार्यालय से पंजीकृत और इनकम टैक्स की धारा 12-A एवं 80 G के अन्तर्गत संस्था पूर्णरूपेण आयकर मुक्त है एवं 80-G के अन्तर्गत दानादाताओं के पक्ष में संस्था को करमुक्ति प्रमाणपत्र प्राप्त है। न्यास के माध्यम से शिक्षा, सेवा और साधना को उद्देश्य करके सभी कार्य किये जाते हैं। जैसे कि मन्दिर की व्यवस्था, गौशाला की व्यवस्था, निःशुल्क आयुर्वेदिक डिस्पैन्शरी, गरीब एवं असहाय बच्चों की शिक्षा हेतु सहायता, गरीब कन्याओं के विवाह में सहायता और सभी देश, धर्म, संस्कृति और समाज के हित में यथासम्भव सेवा के कार्य किये जाते हैं।</p>
      <button class="flex mx-auto mt-10 mb-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
      <div class="flex flex-wrap justify-center">
  <img
 src={require('../../images/groupphoto.JPG')}
  class="p-1 bg-white border rounded w-[750px] h-[450px] mb-2"
  alt="..."
/>
</div>
      <h2 class="text-[10px] text-center mt-12 text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">श्रीनिवास संस्कृत विद्यापीठम् </h1>
      <p class=" mx-auto justify-between text-justify leading-[40px] text-2xl">गुरुकुल का संचालन (छात्रें के आवास, भोजन, वस्त्र, पुस्तक, औषधोपचार, अध्यापकों का वेतन आदि व्यवस्था करने के लिए श्रीनिवास संस्कृत विद्यापीठम् के नाम से सोसाइटी एक्ट 1861 के तहत प×जीकृत किया गया है, जिसे 12-A एवं 80 G की मान्यता प्राप्त है। इस संस्था के माध्यम से पाठशाला की सम्पूर्ण व्यवस्था, भोजन, आवास, वेतन, संस्कृत-पत्रिका प्रकाशन, संस्कृत प्रशिक्षण आदि संस्कृत से जुड़े सभी कार्य यथासम्भव सेवा के रूप में किये जाते हैं।
	इसी तरक का एक गुरुकुल/पाठशाला वैकुण्ठवासी स्वामी श्री गोविन्दाचार्य जी द्वारा सर्वप्रथम पुष्पित हुआ श्रीनिवास संस्कृत विद्यापीठम्। यह एक संस्कृत गुरुकुल है। वर्तमान में इसमें 70 विद्यार्थी निःशुल्क वेद, वेदांग, वेदान्त, दर्शन, साहित्य, अंग्रजी, विज्ञान, कम्प्यूटर, योग आदि का निःशुल्क प्रशिक्षण प्राप्त कर रहे हैं। इस गुरुकुल में 70 विद्यार्थी सहित 100 लोग भोजन, वस्त्र, रोगोपचार सहित निःशुल्क आवास करते हैं। 
	गुरु जी के दृढ लक्ष्य एवं आश्रमस्थ सभी छात्रें तथा अध्यापकों के परिश्रम के फलस्वरूप यह विद्यापीठ दूर-दूर क्षेत्रें व देशों में विद्वत्समाज एवं जनसमाज का प्रशस्तपात्र रहा है।  <br></br>
  <br></br>
	यहाँ के छात्रें की उपलब्धियाँ - <br></br>  <br></br>

	1- जून 1999 से लेकर दिसम्बर 2017 तक श्रीगोविन्दाचार्यजी के मार्गदर्शन, संस्थापकत्व एवं संचालकत्व में संचालित विभिन्न शिक्षण संस्थाओं की प्रगति यह है कि 7 छात्र च्ीण्क (विद्यावारिधि) की उपाधि प्राप्त कर चुके हैं। लगभग 50 छात्र शोध में पंजीकृत हैं। 100 से अधिक छात्र (ठण्मक) (शिक्षाशास्त्री) कर चुके हैं और कई छात्र अभी प्रशिक्षणरत हैं। इसी तरह 200 से ज्यादा छात्रें ने आचार्य (डण्। ) की उपाधि प्राप्त कर ली है और अभी 300 से अधिक छात्र विभिन्न कक्षाओं में अध्ययनरत हैं। मुख्यशाखा दिल्ली की है और इसमें सबसे अधिक लगभग 70 छात्र होते हैं।   <br></br>  <br></br>
	2- यहाँ के विद्यार्थियों ने राज्यीय, राष्ट्रिय, अखिल भारतीय स्तर पर  आयोजित शलाका परीक्षा, भाषण प्रतियोगिता, श्लोकान्त्याक्षरी प्रतियोगिता, सूत्रन्त्याक्षरी प्रतियोगिता, वाद-विवाद प्रतियोगिता, एकल श्लोकसंगीत प्रतियोगिता, नुक्कड़ नाटक आदि विभिन्न कार्यक्रमों में भाग ग्रहण कर प्रथम, द्वितीय आदि स्थानों को प्राप्त कर गौरवान्वित किया है। <br></br>  <br></br>
	3- यहाँ से पढे हुये छात्रें ने विभिÂ विश्वविद्यालयों में जाकर बी-ए तथा एम-ए इत्यादि कक्षाओं में अनेक स्वर्णपदक प्राप्त किये हैं।  <br></br>  <br></br>
	4- यहाँ से शिक्षा प्राप्त किये हुये अनेक छात्र भारत तथा नेपाल, अमेरिका इत्यादि देशों में विभिÂ विश्वविद्यालयों में प्राफेसर, लेक्चरर इत्यादि पदों पर रहकर संस्कृत एवं संस्कृति प्रचार प्रसार में संलग्न है। <br></br> <br></br>
</p>
      
       <button class="flex mx-auto mt-[10px] text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
       
       <h2 class="text-[10px] text-center mt-12 text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">गुरुकुल एवं छात्रें की संयुक्त समय-सारिणी </h1>
     
       <p class="  justify-between text-justify leading-relaxed text-2xl">आश्रम के सभी छात्र, अध्यापक एवं पुजारीगण प्रातः 3ः45 बजे उठ जाते हैं।
ध्  तत्पश्चात् 4ः30 तक स्नान करके 4ः30 से सभी सन्ध्यावन्दन करते हैं।
ध् प्रातः 5 बजे कुछ छात्र सुप्रभातम् आदि का पाठ करते हैं तो अर्चकगण कहाली और घण्टध्वनि के साथ मन्दिर में प्रवेश करते हैं। कुछ आचार्य 12 वर्ष से ऊपर के छात्रें के साथ योगासन का अभ्यास कराते हैं। कुछ छात्र हवन प्रारम्भ करते हैं। इस तरह छात्रें में कार्य बाँट कर भगवान् की आराधना, सुप्रभातम्, हवन और योगासन का कार्य एक साथ चलता है। 
ध् अर्चक मन्दिर में अन्दर की सफाई के साथ जल भरने आदि कार्य करके 	भगवान् को जगाते हैं और अर्घ्य, पाद्य, धूप, दीप करके मोदक (लड्डू) और दूध का भोग लगाकर ठीक 5ः30 बजे मंगला आरती करते है। इसके बाद भगवान् शालिग्राम का स्नान और मूलविग्रह एवं उत्सव-विग्रह का श्रृंगार करके फल भोग लगाकर ठीक 7ः00 बजे बड़ी आरती होती है। 	 आरती में सुमघõलं स्तोत्र, पुष्पा×जली, तुलसी अर्चना, दिव्यप्रबन्ध, कर्पूर आरती के बाद गुरुपरम्परा पाठ करते हुए तीर्थ (चरणामृत) और भगवान् के चरणों में अर्पित तुलसीपत्र का वितरण, शठारि (भगवान् के श्रीचरणों का भक्तों के शिर से स्पर्श कराना) के साथ भोग लगा हुआ फलप्रसाद वितरण व लघु कीर्तन होता है। शाम की बड़ी आरती में भी यही क्रम है।
ध्	कुछ अध्यापक प्रातः 6 से 7 बजे तक छात्रें का शास्त्रभ्यास कराते हैं।
ध्	आरती के पश्चात् 7ः30 से 8ः30 तक वैदिक सूक्त, लक्ष्मीस्तोत्र एवं श्रीमद्भागवत महापुराण का नित्य पाठ होता है और आचार्यश्री के मुखारविन्द से गीता आदि शास्त्रें पर प्रवचन भी होता है।
ध्	प्रातः 8ः30 बजे भगवान् को अन्न का बालभोग लगता है और उसके बाद छात्रें सहित सभी लोग बालभोग का प्रसाद नाश्ते के रूप में ग्रहण करते हैं।
ध्	इसके बाद मन्दिर में वेद, पुराणादि शास्त्रें का पारायण चलता रहता है।
ध्	9ः00 बजे से 12ः00 बजे तक छात्रें को आचार्यगण वेदाभ्यास (अध्ययन), गणित, अंग्रेजी, संगीत का अध्यापन कराते हैं। 
ध्	मध्याह्न 12 बजे राजभोग के बाद भगवान् की आरती होती है। उसके बाद मन्दिर का पट बन्द हो जाता है और सभी आश्रमवासी राजभोग का प्रसाद (भोजन) ग्रहण करते हैं।
ध्	मध्याह्न 1 बजे से 4 बजे तक छात्रगण व्याकरण, काव्य, कोष, हिन्दी कम्प्यूटर आदि का अध्ययन करते हैं।
ध्	शाम 4 बजे से भगवान् का पट खुलता है और दूध तथा मोदक का भोग लगाकर मंगला आरती करते हैं।
ध्	छात्रगण 4 से 6 बजे तक अपने कपड़े धोना और सफाई आदि का कार्य करते हैं।
ध्	सन्ध्यावन्दन ग्रीष्मकाल में शाम को 6 बजे और शीतकाल में शाम को 5 बजे होता है।
ध्	तत्पश्चात् मन्दिर में विविध स्तोत्रें का पारायण होता है।
ध्	शाम को चने का भोग लगाकर शीतकाल में ठीक 6 बजे और ग्रीष्मकाल में शाम ठीक 7 बजे महा आरती होती है। तत्पश्चात् तीर्थ-प्रसाद वितरण व कीर्तन होता है।
ध्	रात्रि का राजभोग 8 बजे होता है और छोटी आरती होती है। इसके बाद सभी लोग भोजन प्रसाद ग्रहण करते हैं।
ध्	बीच-बीच में छात्रगण अपने पाठ का अभ्यास करते रहते हैं।
ध्	रात्रि को 9 बजे दूध भोग लगाकर शयन आरती होती है।
	इस तरह प्रतिदिन भगवान् को आठ बार भोग लगाया जाता है।
ध्	रात्रि 9 बजे दुग्धपान करके छोटे छात्र सो जाते हैं और और बड़े छात्र 10 बजे शयन करते हैं।
</p>
    </div>
    
   
    
    
  </div>
  
      <div className="  border-2 border-gray-100 p-6 w-3/4 h-[890px] bg-blue-400 z-20  top-0 lg:left-[1px] lg:w-80 relative ">

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
    