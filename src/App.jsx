import './App.css';
import About from './components/About';
import Intro from './components/Intro';
import Products from './components/Products';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import { useEffect } from 'react';
import Skills from './components/Skills';


function App() {

  useEffect(() => {
    const body = document.getElementById("body");
    const darkBtn = document.getElementById("dark-mode");

    let bodyBg = 'white';
    let bodyColor = 'black';
    let btnText = '&#9728;'
    darkBtn.addEventListener("click", function(){
      if(bodyBg === 'black'){
        bodyBg = 'white';
        bodyColor = 'black';
        btnText = '&#9728';
      } else if (bodyBg === 'white'){
        bodyBg = 'black';
        bodyColor = 'white'
        btnText = '&#9790';
      }
      body.style.background = bodyBg;
      body.style.color = bodyColor;
      darkBtn.innerHTML = btnText;
    })
  }, [])

  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Skills/>
      <Products />
      <Certificates />
      <Contact />
      <button id="dark-mode" className="btn-theme-toggler bg-theme">
      &#9728;
      </button>
    </>
  );
}

export default App;
