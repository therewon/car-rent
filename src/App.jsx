import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Detail from "./pages/Detail"
import Footer from "./components/Footer"
import Payment from "./pages/Payment"
import Navbar from "./components/Navbar"
import './App.css'
import LikedCars from "./pages/LikedCars"

 const App = () => {


  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<Detail />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/category/liked-cars" element={<LikedCars />} />
      </Routes>
      <Footer />
    </>
  )
 }

 export default App