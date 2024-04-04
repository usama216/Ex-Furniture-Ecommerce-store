import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Auth/Register";
import Home from "./Pages/Home/Home";
import Catogries from "./Pages/Catogries/Catogries";
import Aboutus from "./Pages/About/Aboutus";
import Contactus from "./Pages/Contact/Contactus";
import './App.css'
import ForgetPassword from "./components/Auth/ForgetPassword";
import OTP from "./components/Auth/OTP";
import SetPassword from "./components/Auth/SetPassword";
import 'react-toastify/dist/ReactToastify.css';
import SellerHome from "./SellerDashboard/SellerComponents/SellerHome";
import StaticSidebar from "./AdminDashboard/Components/SideBar";

function App() {
  const location = useLocation();

  // Check if the current path is not "/admin-dashboard"
  const showHeaderFooter = !location.pathname.includes("/admin-dashboard");

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/catogries" element={<Catogries />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/seller-dashboard" element={<SellerHome />} />
        <Route path="/admin-dashboard" element={<StaticSidebar />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
