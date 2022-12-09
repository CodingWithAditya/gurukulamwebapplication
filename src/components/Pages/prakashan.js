import React from 'react'
import {
    MdOutlineLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlineHome,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHeart,FaHandshake,FaBook,FaCampground, FaBlog} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Prakashan = () => {
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
          <h2 class="text-[10px] text-center text-indigo-500 tracking-widest font-medium title-font mb-1">WWW.GURUKULSANSKRITAM.COM</h2>
          <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">स्वामी गोविन्दाचार्य जी द्वारा लिखित तथा</h1>
          <p class=" mx-auto justify-between text-justify leading-[50px] text-2xl">1.	आठ वर्ष से लेकर बीस वर्ष तक के बालकों को गुरुकुलीय परम्परानुसार वेद, वेदांग, व्याकरण, वेदान्त, कर्मकाण्ड, ज्योतिष, संगीत, अंग्रेजी, कम्प्यूटर 	आदि की विभिÂ स्थानों में गुरुकुल के माध्यम से निःशुल्क शिक्षा। <br></br>
2.	निःशुल्क रोगोपचार हेतु धर्मार्थ आयुर्वेदिक औषधालय संचालित है जिसमें प्रतिदिन 100 से अधिक रोगी लाभ प्राप्त करते हैं।<br></br>
3.	निःशुल्क रोगोपचार हेतु श्रीनिवास हृदयरोग चिकित्सा केन्द्र संचालित है।<br></br>
4.	कामधेनु वंश की गौमाताओं की सेवा हेतु एक गौशाला संचालित है।<br></br>
5.	गरीब कन्याओं के विवाहार्थ यथासम्भव सहयोग।<br></br>
6.	गरीब बालकों के अध्ययनार्थ स्कूल फीस, पुस्तक-कॉपी तथा अन्य पाठड्ढसामग्री प्रस्वामी गोविन्दाचार्य जी द्वारा लिखित तथा
सम्पादित ग्रन्थ व पुस्तकें, पद एवं पुरस्कार
1.	पाणिनीय व्याकरणस्यैतिहासिकं परिशीलनम् (संस्कृत में)
2.	 नित्यानुसन्धानम् (हिन्दी अनुवाद सहित)
3.	वैयाकरणसिद्धान्तकौमुदी की श्रीधरमुखोल्लासिनी हिन्दी विस्तृत व्याख्या
        (6 भागों में प्रकाशित, 7वाँ प्रेस में)
4.	ट्टजुसिद्धान्तकौमुदी मूल एवं हिन्दी में व्याख्या)
5.	 सारसिद्धान्तकौमुदी (हिन्दी व्याख्या)
6.		तर्कसंग्रह (श्रीनिवासमुखोल्लासिनी संस्कृत एवं श्रीधरमुखोल्लासिनी हिन्दीव्याख्या)
7.		लघुसिद्धान्तकौमुदी पर श्रीधरमुखोल्लासिनी व्याख्या (हिन्दी व्याख्या)
8.		सुदर्शनानुष्ठानम् (पूजा एवं हवन विधि, संस्कृत व्याख्या एवं हिन्दी व्याख्या)
9.		गीतार्थसंग्रह की रक्षा टीका की श्रीधरमुखोल्लासिनी व्याख्या (हिन्दी व्याख्या)
10.		 नित्यानुसन्धानम्, सम्पादन (स्तोत्र संग्रह, नेपाली भाषा में अनुवाद सहित)
11.	 श्रीनिवासस्तोत्रमाला (स्तोत्र संग्रह) का सम्पादन
12.	नक्षत्रनुसारि श्रीविष्णुसहस्रनामानुष्ठानम्
13.	श्रीधनुर्मासोत्सव (श्रीगोदाम्बाव्रत)
14.	 श्रीरामानुजाचार्य (संक्षिप्त जीवन वृत्त)
आचार्यश्रीजी के प्रकाशोन्मुख ग्रन्थः-
1.	 श्रीसम्प्रदाय: एक परिचय
 	(श्रीवैष्णव-सम्प्रदाय के समग्र रूप से परिचय कराने वाला बृहद् ग्रन्थ)
2.	 संक्षिप्तो विशिष्टाद्वैतकोशः (विशिष्टाद्वैत दर्शन के लगभग 8000 शब्द)
3.	 श्रीरामानुजग्रन्थाः (एकजिल्द में श्रीरामानुजाचार्यस्वामीजी के सभी ग्रन्थों का 		 सम्पादन)
4.	 वेदार्थसंग्रह (हिन्दी व्याख्या श्रीधरमुखोल्लासिनी)
5. 	ब्रह्मसूत्रसारः (हिन्दी व्याख्या)
6.	वेदान्तदीपः (श्रीधरमुखोल्लासिनी हिन्दी व्याख्या)
7. 	 वेदान्तसारः (हिन्दी व्याख्या)
8. 	 श्रीभाष्यम् (श्रीधरमुखोल्लासिनी हिन्दी व्याख्या)
9. 	ब्रह्मसूत्र-त्रिविधार्थः (द्वैत, अद्वैत और विशिष्टाद्वैत सम्मत व्याख्या के अनुसार 		 हिन्दी में ब्रह्मसूत्रें का सरल अर्थ)
10. 	 कौमुदीप्रवेशः
11.	 पाणिनीयाष्टाध्यायी की श्रीधरमुखोल्लासिनी व्याख्या
12.	 संस्कृत व्याकरण का परिचय
13.	 श्रीम७ागवतमहापुराण की श्रीधरी टीका की हिन्दी व्याख्या (सात भागों में)
14.	 पाणिनीयवादरत्नम् की हिन्दी व्याख्या
15. 	 मध्यसिद्धान्तकौमुदी हिन्दी व्याख्या
16.	 अष्टाध्यायी पर ट्टजुकाशिका व्याख्या 8 भागों में।
17. 	 श्रीरामानुजाचार्यस्वामिविरचित नित्यग्रन्थ का सम्पादन व प्रकाशन।
18. 	 श्रीवेदान्तदेशिकविरचित तत्त्वमुक्ताकलाप पर हिन्दी व्याख्या
19.	 प×चस्तवी का हिन्दी अनुवाद।
20. 	 श्रीयामुनाचार्यस्वामी जी के आगमप्रामाण्यम् का सम्पादन व प्रकाशन।
21.	श्रीमद्-भगवद्-गीता पर श्रीरामानुजभाष्य-सहित पदच्छेद, अन्वय, शब्दार्थ व 		व्याख्या।
पद, पुरस्कार एवं सम्मानः-
1- भूत पूर्व विभागाध्यक्ष (व्याकरण) सम्पूर्णानन्द संस्कृत विश्वविद्यालय, 		वाराणसी से सम्बद्ध श्रीनिवास बोधायन रामानुज संस्कृत महाविद्यालय,
उत्तर तोताद्रिमठ, अयोध्या।
2-	भूतपूर्व सदस्य, दिल्ली संस्कृत अकादमी (दिल्ली सरकार)
3-	सदस्य- श्रीगोस्वामीगिरिधारलालशास्त्री प्राच्यविद्या प्रतिष्ठान, दिल्ली सरकार।
4- 	संस्कृत सेवा सम्मान (दिल्ली संस्कृत अकादमी, दिल्ली सरकार)
5-	पाणिनि सम्मानः (दिल्ली संस्कृत अकादमी, दिल्ली सरकार)
6- विद्यासागर उपाधि (मन्दाकिनी विद्वत्परिषत्, दिल्ली द्वारा) सम्मान
7- ऋषि-सम्मान (श्री शंकर शिक्षायतन, नई दिल्ली)
8-	आचार्य शंकर पुरस्कार (श्रीशंकराचार्यजी, विश्व कल्याण मिशन)
9- सवश्रेष्ठ-धर्मोपासक सम्मान (श्रीवैष्णो सेवा मण्डल चेरिटेबल ट्रस्ट)
10- 	 जन सेवक सम्मान ( वेद फाउण्डेशन, दिल्ली)


</p>
          <button class="flex mx-auto mt-10 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now</button>
        
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
