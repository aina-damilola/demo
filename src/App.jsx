import './App.css';

import Header from './apps/header';
import Title from './apps/title';
import Countdown from './apps/timer';
import About from './apps/about';
import Team from './apps/team';
import Footer from './apps/footer';

import Stars from './apps/stars';
import Torus from './apps/donut';




import { useRef } from 'react';

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (section) => {
    if (section === "section1") {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "section2") {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "section3") {
      section3Ref.current.scrollIntoView({ behavior: "smooth" });
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
        <Team section3Ref={section3Ref} />
        <Footer/>
      </div>
      
      <Torus/>
      
      
    </div>
  );
}

export default App;
