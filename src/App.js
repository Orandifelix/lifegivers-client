import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpLoginComponent from "./components/kevinauth/SignUpLogin";
import Articles1 from "./components/leiladonations/articles1";
import Articles from "./components/leiladonations/articles";
import Navbar from "./components/orandilanding/Navbar";
import Aboutus from "./components/orandilanding/landitems/Aboutus";
import Footer from "./components/orandilanding/Footer";
import DonationForm from "./components/leiladonations/DonationForm";
import DonationCenterList from "./components/kevinauth/DonationCenterList";
import DonationCenterUpdate from "./components/kevinauth/DonationCenterUpdate";
import DonationCenterCreate from "./components/kevinauth/DonationCenterCreate";
import Donationtypes from "./components/orandilanding/landitems/Donationtypes";
import Landing from "./components/orandilanding/Landing";

const context = createContext()

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <context.Provider value= {[user, setUser]}>
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignUpLoginComponent />} />
        <Route path="/donation_centers" element={<DonationCenterList />} />
        <Route path="/donationForm" element={<DonationForm />} />
        <Route path="/" element={<Landing />} />
        <Route path="/donation_centers/update" element={<DonationCenterUpdate />} />
        <Route path="/donation_centers/create" element={<DonationCenterCreate />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/articles1" element={<Articles1 />} /> 
        <Route path="/articles" element={<Articles />} /> 
        <Route path="/types" element={<Donationtypes />} />
      </Routes>
      <hr className="horizontal-line" />
      <Footer />
    </Router>
    </context.Provider>
  );
}

export default App;
