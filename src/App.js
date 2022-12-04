import Navbar from './components/Navbar/navBar';
import SideBar from './components/sideBar/sideBar';

import { BrowserRouter as Router, Routes, Route, Switch  } from 'react-router-dom';
import './App.css';
import { Bhoomi } from './components/Pages/Bhoomi';
import { Gurukul } from './components/Pages/gurukul';
import { Footer } from './components/Footer/footer';
import { Privacy } from './components/Pages/privacy';

function App() {
  return (
    <>
  <Navbar/>
   <div >
      <Router>
        <Routes>
          
          <Route path="/"  element ={<SideBar/>}/>
          <Route path="/bhoomi" element={<Bhoomi/>}/>
          <Route path="/gurukul" element={<Gurukul/>}/>
          <Route path="/privacy" element={<Privacy/>}/>




        </Routes>
      </Router>

    </div>
    <Footer/>
    </>
    
  );
}

export default App;
