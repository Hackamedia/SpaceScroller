import React from 'react';
import './App.css';
import Parallax from 'react-rellax'


function App() {
  
  return (
    <div className="container">
      {/* <audio controls autoPlay loop>
        <source src="Moon.mp3" type="audio/mpeg"/>
      </audio> */}

      <Parallax speed={-1}>
        <div className="page1">
          <div className="pictureDiv">
            <Parallax speed={-2}>
              <img className="clouds" src="./pages/Page1/Clouds.svg" alt=""/>
            </Parallax>
            <img className="mountains" src="./pages/Page1/Mountains.svg" alt=""/>
            
            <div className="mountainDiv1">
              <Parallax speed={-3}>
                <img className="sun" src="./pages/Page1/Sun.svg" alt=""/>
              </Parallax>
              <img className="boyMC1" src="./pages/Page1/BoyMC.svg" alt=""/>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax speed={-1}>
        <div className="page2">
          <div className="pictureDiv">
            <Parallax speed={-1}>
              <img className="stars" src="./pages/Page2/Stars.svg" alt=""/>
            </Parallax>
            <img className="mountains" src="./pages/Page2/Mountains.svg" alt=""/>
            
            <div className="mountainDiv2">
              <Parallax speed={-2}>
                <img className="moon" src="./pages/Page2/Moon.svg" alt=""/>
              </Parallax>
              <img className="boyMC2" src="./pages/Page2/BoyMC.svg" alt=""/>
            </div>
          </div>
        </div>
      </Parallax>
      
    </div>
  );
}

export default App;