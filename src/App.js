import FancyBorder from "./Layouts/FancyBorder";
import Footer from "./Templates/Footer";
import Header from "./Templates/Header";



function App() {
  return (
    <div style= {{width: "800px", margin: "0 auto"}}>
   <FancyBorder> 
    <Header />
   </FancyBorder>
   <FancyBorder> 
    <Footer />
   </FancyBorder>
    </div>
  );
}

export default App;
