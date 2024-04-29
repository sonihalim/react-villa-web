import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navigationbar2 from './Components/Navbar 3';
import Jakarta from './Components/Villa/Jakarta/jakarta';
import Bogor from './Components/Villa/Bogor/bogor';
// import Navbar from './Components/Navbar 2';
import Contact from './Components/Contact';
import Popup from './Components/Popup Contact/Index';

function App() {
  return (
    <div className='bg-white'>
      <Router>
        <Navigationbar2/>
        <Popup/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/the-kata-villa-sakuta' element={<Jakarta/>}/>
              <Route path='/the-kata-villa-puncak' element={<Bogor/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </Router>
      </div>
  );
}

export default App;
