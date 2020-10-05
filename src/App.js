import React from 'react';
import './App.css';

function App() {
  
  return (
    <div className="container">
      {/* <audio controls autoPlay loop>
        <source src="Moon.mp3" type="audio/mpeg"/>
      </audio> */}

      <div className="page1">
        <div className="pictureDiv">
          <p className="text">Ever since Kay was a baby</p>
          <div className="animate"/>
          <img className="clouds" src="./pages/Page1/Clouds.svg" alt=""/>
          <img className="mountains" src="./pages/Page1/Mountains.svg" alt=""/>
          
          <div className="mountainDiv1">
            <img className="boyMC1" src="./pages/Page1/BoyMC.svg" alt=""/>
            <img className="sun" src="./pages/Page1/Sun.svg" alt=""/>
          </div>
        </div>        
      </div>

      {/* <div className="page2">
        <div className="pictureDiv">
          <img className="stars" src="./pages/Page2/Stars.svg" alt=""/>
          <img className="moon" src="./pages/Page2/Moon.svg" alt=""/>
          <img className="mountains" src="./pages/Page2/Mountains.svg" alt=""/>
          
          <div className="mountainDiv2">
            <img className="boyMC2" src="./pages/Page2/BoyMC.svg" alt=""/>
          </div>
        </div>
      </div>       */}
      
    </div>
  );
}

export default App;