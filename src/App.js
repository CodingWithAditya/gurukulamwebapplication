import Navbar from './components/Navbar/navBar';
import SideBar from './components/sideBar/sideBar';
import { GlobalStyle } from './gobalStyles';

import { BrowserRouter as Router, Routes, Route, Switch  } from 'react-router-dom';
import './App.css';
import { Bhoomi } from './components/Pages/Bhoomi';
import { Gurukul } from './components/Pages/gurukul';
import { Footer } from './components/Footer/footer';
import { Privacy } from './components/Pages/privacy';
import { Gaushala } from './components/Pages/gaushala';
import { Heart } from './components/Pages/heart';
import { Ayurvedic } from './components/Pages/ayurvedic';
import { Prakashan } from './components/Pages/prakashan';
import { Samajik } from './components/Pages/samajik';
import { Blog } from './components/Pages/blog';
import { Suspense } from 'react';
import { Bhoomidaan } from './components/Pages/bhoomidaan';

function App() {
  return (
    <>
    <Suspense fallback={null}>
      <GlobalStyle/>
  <Navbar/>

   <div >
      <Router>
        <Routes>
          
          <Route path="/"  element ={<SideBar/>}/>
          <Route path="/bhoomi" element={<Bhoomi/>}/>
          <Route path="/gurukul" element={<Gurukul/>}/>
          <Route path="/gaushala" element={<Gaushala/>}/>

          <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/heartclinic" element={<Heart/>}/>
        <Route path="/ayurvedicclinic" element={<Ayurvedic/>}/>
        <Route path="/prakashan" element={<Prakashan/>}/>
        <Route path="/samajik" element={<Samajik/>}/>
        <Route path="/bhoomidaan" element={<Bhoomidaan/>}/>
        <Route path="/blog" element={<Blog/>}/>



        </Routes>
      </Router>

    </div>
    
    <Footer/>
    </Suspense>
    </>
    
  );
}

export default App;
