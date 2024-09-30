import Navbar from "./Components/Navbar"
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products"
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import React from "react";
import AnimatedCursor from "react-animated-cursor"





const App = () => {
  
  return <div className='App max-w-full h-screen-full-xl bg-black font-["satoshi"]  '>
  <div className="App">
      
      <Navbar />
  <Work/>
  <Stripes />
  <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
/>

  <Products />
  <Marquees />
  <Cards />
  <Footer/>
      
    </div>
  

  
  
  </div>
};

export default App;



