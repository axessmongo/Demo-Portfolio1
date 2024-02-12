import React,{useEffect} from 'react';
import './App.css';


// import Career from './Components/Career';
import Nav from './Components/Nav';
import Card from './Components/Card';

import Adorama from './Adorama';
import Bny from './Bny'
import Airpaz from './Airpaz';
import AOS from 'aos';
import 'aos/dist/aos.css';




import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Technical from './Components/Technical';
import Testimonal from './Components/Testimonal';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      
    });
  }, []); 
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Technical/>}/> */}
        {/* <Route path='/' element={<About/>}/> */}
       



        {/* <Route path="/" element={<Nav/>}/> */}

        {/* <Route path="/" element={<Career/>}/> */}

        {/* <Route path='/' element={<Footer/>}/> */}
        {/* <Route path='/' element={<Testimonal/>}/> */}
      


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
