import Navbar from './components/Navbar/navBar';
import SideBar from './components/sideBar/sideBar';

import { BrowserRouter as Router, Routes, Route, Switch  } from 'react-router-dom';
import './App.css';
import { Bhoomi } from './components/Pages/Bhoomi';

function App() {
  return (
    <>
  <Navbar/>
   <div >
      <Router>
        <Routes>
          
          <Route path="/"  element ={<SideBar/>}/>
          <Route path="/bhoomi" element={<Bhoomi/>}/>




        </Routes>
      </Router>

    </div>
    </>
    
  );
}

export default App;
