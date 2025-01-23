import './styles/App.css';

import Header from './header';
import Title from './title';


import Stars from './Stars';
import Countdown from './timer';

import Torus from './Donut';
import Footer from './footer';

import About from './about';
import { useRef } from 'react';

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToSection = (section) => {
    if (section === "section1") {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "section2") {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      
      <Header onScrollToSection={scrollToSection}/>

      <div id="stars-container" style={{position:"fixed", width:"100vw", height:"100vh", zIndex: 2}}>
        <Stars/>
      </div>
      
      
      <div id="_body">
        <Title section1Ref={section1Ref}/>
        <Countdown/>

        <About section2Ref={section2Ref} />

        <Footer/>
      </div>
      
      {/* <Torus/> */}
      
      
    </div>
  );
}

export default App;
