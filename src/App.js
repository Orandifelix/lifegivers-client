import './App.css';
import SignUpLoginComponent from './components/kevinauth/SignUpLogin';
import Landing from './components/orandilanding/Landing';
import Navbar from './components/orandilanding/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './components/orandilanding/landitems/Aboutus';
import Footer from './components/orandilanding/Footer';
import DonationCenterList from './components/kevinauth/DonationCenterList'
import DonationCenterUpdate from './components/kevinauth/DonationCenterUpdate'
import DonationCenterCreate from './components/kevinauth/DonationCenterCreate'

function App() {
  return (
    <Router className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<SignUpLoginComponent/>}/>
        <Route path="/donation_centers" element={<DonationCenterList/>}/>
        <Route path="/donation_centers/update" element={<DonationCenterUpdate/>}/>
        <Route path="/donation_centers/create" element={<DonationCenterCreate/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      <hr className="horizontal-line"/>
      <Footer/>
    </Router>
  );
}

export default App;
