import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from "./pages/About"
import Services from"./pages/Services"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Services />} />
      <Route path='/contact' element={<Contacts />} />
    </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
