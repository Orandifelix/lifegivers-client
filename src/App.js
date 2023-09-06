import React from "react";
import SignUpLoginComponent from "./components/kevinauth/SignUpLogin";
import Articles from "./components/leiladonations/articles"; // Updated import path
import Navbar from "./components/orandilanding/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/orandilanding/landitems/Aboutus";
import Footer from "./components/orandilanding/Footer";
import DonationForm from "./components/leiladonations/DonationForm"; // Updated import without .js extension

import DonationCenterList from "./components/kevinauth/DonationCenterList";
import DonationCenterUpdate from "./components/kevinauth/DonationCenterUpdate";
import DonationCenterCreate from "./components/kevinauth/DonationCenterCreate";

import Donationtypes from "./components/orandilanding/landitems/Donationtypes";
import Landing from "./components/orandilanding/Landing";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignUpLoginComponent />} />
        <Route path="/donation_centers" element={<DonationCenterList />} />
        <Route path="/DonationForm" element={<DonationForm />} /> {/* Updated route */}
        <Route path="/" element={<Landing />} />
        <Route path="/donation_centers/update" element={<DonationCenterUpdate />} />
        <Route path="/donation_centers/create" element={<DonationCenterCreate />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/articles" element={<Articles />} /> {/* Updated route */}
        <Route path="/types" element={<Donationtypes />} />
      </Routes>
      <hr className="horizontal-line" />
      <Footer />
    </Router>
  );
}

export default App;
