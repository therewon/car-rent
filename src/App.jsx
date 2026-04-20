import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Detail from "./pages/Detail"
import Footer from "./components/Footer"
import Payment from "./pages/Payment"
import Navbar from "./components/Navbar"
import './App.css'

 const App = () => {


  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categroy/:id" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  )
 }

 export default App