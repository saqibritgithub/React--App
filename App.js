import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode , setMode] =useState('light')
  const [alert , setalert] =useState('null')
const showalert=(message,type)=>{
      setalert({
        msg:  message,
        type:type
      })
      setTimeout(() => {
        setalert("");
      }, 1000);
}



  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#091e35'
      showalert("Dark mode has been enabled","sucess")
      document.title = 'Textitules- Dark mode'
      setInterval(() => {
        document.title = 'Textitules is Amazing mode'
      }, 2000);
      setInterval(() => {
        document.title = 'Install Textitules Now'
      }, 1500);
    }
    else{
         setMode('light')
         document.body.style.backgroundColor='white'
         showalert("light mode has been enabled","sucess")
         document.title = 'Textitules- light mode'
    }

  }
  return (
    <>
   
{/* <Navbar title="Textitules" aboutText="About textutiles"/> */}
{/* <Navbar/> */}
<Navbar className='textitule' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my_3'>
{/* <TextForm showalert={showalert} heading= "Enter the  text to analyze" mode={mode}/> */}
<About/>
</div>
</>
  );
}

export default App;
   