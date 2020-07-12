import React from 'react';
import { Parallax } from 'react-parallax';
import Interactions from './Interactions';
import './App.css';

function App() {
  
  var image1 = new Image();
  var image2 = new Image();
  var image3 = new Image();
  var image4 = new Image();
  var image5 = new Image();
  var image6 = new Image();

  image1.src = "./night.jpg";
  image2.src = "./LOL.jpg";
  image3.src = "./RaWRxD.jpg";
  image4.src = "./Goteem.jpg";
  image5.src = "./LUL.jpg";
  image6.src = "./Hehehe.jpg"

  /*
  function someFunction() {


  Functions like figuring out the infinite scroll and input output will be above the App function

  }
  */

  // Everything above is going to be your functions, think of them like prototyping your functions
  // This is the main code below, think of the return in the App function as your int main()
  return (
    <div> {/* Between this div is the main div container, everything in here will be the website */}

    {/* <Interactions/> */}
        
        <div className="background-image"> {/* Between this div is where you're going to call the scrolling function */}

          {/* <Parallax bgImage={image1.src} className="background-image" strength="100">

          </Parallax> */}
          
          

            <div> {/* Between this div is where the background image is going to go */}   

              <div> {/* Between this div is where the text prompts are going to be */}
                
              </div>

              <div> {/* Between this div is where visual animations are going to be (Like the rocket ship and the person travelling) */}

                {/* <Parallax bgImage={image2.src} className="image" strength="300">

                </Parallax>

                <Parallax bgImage={image3.src} className="image" strength="300">

                </Parallax>

                <Parallax bgImage={image4.src} className="image" strength="300">

                </Parallax>

                <Parallax bgImage={image5.src} className="image" strength="300">

                </Parallax>

                <Parallax bgImage={image6.src} className="image" strength="300">

                </Parallax> */}

              </div>

              <div> {/* Between this div is where any audio is going to go */}

              </div>

            </div>
          
        </div>

    </div>
  );
}

export default App;