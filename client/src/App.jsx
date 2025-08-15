import React,{useState} from "react";
import {Toaster} from "react-hot-toast";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import CarDetails from "./pages/CarDetails";

import ManageBookings from "./pages/Owner/ManageBookings";
import ManageCars from "./pages/Owner/ManageCars";
import AddCar from "./pages/Owner/AddCar";
import Dashboard from "./pages/Owner/Dashboard";
import Layout from "./pages/Owner/Layout";

import { useLocation, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";


const App = () => {

  const {showLogin}=useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
     <Toaster/>
      {showLogin && <Login/>}
      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/car-details/:id" element={<CarDetails/>} />
        <Route path="/my-bookings" element={<MyBookings/>} />
        
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-car" element={<AddCar />} />
            <Route path="manage-cars" element={<ManageCars />} />
            <Route path="manage-bookings" element={<ManageBookings />} />
          
          </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
}

export default App;
