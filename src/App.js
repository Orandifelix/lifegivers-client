import './App.css';
import SignUpLoginComponent from './components/kevinauth/SignUpLogin';
import Landing from './components/orandilanding/Landing';
import Navbar from './components/orandilanding/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './components/orandilanding/landitems/Aboutus';
import Footer from './components/orandilanding/Footer';
import Donationtypes from './components/orandilanding/landitems/Donationtypes';

function App() {
  return (
    <Router className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<SignUpLoginComponent/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/types' element={<Donationtypes/>} />
      </Routes>
      <hr className="horizontal-line"/>
      <Footer/>
    </Router>
  );
}

export default App;
