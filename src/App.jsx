import './styles/App.css';

import Header from './header';
import Title from './title';


import Stars from './Stars';
import Countdown from './timer';

import Torus from './Donut';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      
      <Header/>

      <div id="stars-container" style={{position:"fixed", width:"100vw", height:"100vh", zIndex: 2}}>
        <Stars/>
      </div>
      
      
      <div id="_body">
        <Title/>
        <Countdown/>
        <Footer/>
      </div>
      
      <Torus/>
      
      
    </div>
  );
}

export default App;
