import './style.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import React, { useState } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";



export default function Text() {
     const [mode, setMode] = useState('light')
     const [alert, setAlert] = useState(null);

     const showAlert=(message,type)=>{
          setAlert({
              msg: message,
              type: type
          })
          
          setTimeout(() =>{
              setAlert(null);
          },1500);
     }

    const toggleMode = () =>{
         if(mode==='light'){
             setMode ('dark')
             document.body.style.backgroundColor = '#042743'
             showAlert("Dark Mode Enabled","success")
             document.title = 'TextUtils-Dark-Mode'
         }else{
             setMode ('light')
             document.body.style.backgroundColor = 'white'
             showAlert("Light mode enabled","success")
             document.title = 'TextUtils-Light-Mode'
         }
     }
    return (
    <div>
        
            {/* <Navbar title="Textutils2" aboutus="About Me"/> */}
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-4" >
         
                <Routes>
                <Route path="About" element={<About mode={mode}/>} />
                <Route path="/" element={<TextForm showAlert={showAlert} head='Enter text to analyze' mode={mode}/>}/>
                </Routes>
                
              
        </div>    
                        
      </div> 
    )
}
