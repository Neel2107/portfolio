import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";

import "./index.css"

function App() {

  const blob = document.getElementById("blob");

  window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 200, fill: "forwards" });
  }
  return (
    <div className="App">
         <div id="blur"></div>
         <div id="blob"></div>
      <Navbar />
      <MainContainer/>
      <AboutMeSection/>
   
    </div>
  );
}

export default App;
