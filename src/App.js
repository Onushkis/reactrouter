import { Routes, Route,  } from "react-router-dom";
import FancyBorder from "./Layouts/FancyBorder";
import Footer from "./Templates/Footer";
import Header from "./Templates/Header";
import Nav from "./Templates/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div style= {{width: "800px", margin: "0 auto"}}>
   <FancyBorder> 
    <Header />
   </FancyBorder>
   <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact />} />
   </Routes>
   <FancyBorder> 
    <Footer />
   </FancyBorder>
    </div>
  );
}

export default App;
