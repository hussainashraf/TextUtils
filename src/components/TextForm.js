import React, { useState } from 'react'
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success")
    }
    const handleLoClick = () => {
        //  console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case","success")
    }
    const handleClClick = () => {
        //  console.log("Uppercase was clicked"+text)
        let newText = '';
        setText(newText);
        props.showAlert("Text Box Cleared","success")
    }
    const handleReClick = () => {
       
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("String reverse","success")
    }
    const handleOnChange = (e) => {
        // console.log("on Change")
        setText(e.target.value);
        
    }
    const [text, setText] = useState('');
    // text="hello"; 

    // // const countfunction =()=>{
    // //     var words = document.getElementById("count").value
    // //     var count = 0
    // //     var split = words.split(' ');
    // //     for(var i=0;i<split.length;i++){
    // //         if(split[i] !==" "){
    // //             count+=1;
    // //         }
    // //     }
    // }
    return ( 

        
        <div className = "container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 > { props.head } </h1> 
        <div className = "container my-3" >
        <textarea className = "form-control" id = "exampleFormControlTextarea1" onChange = { handleOnChange } style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}rows = "8"value = { text } > </textarea>
        <button className = "btn btn-primary mt-2" onClick = { handleUpClick }> Convert to Uppercase </button> 
        <button className = "btn btn-primary mt-2 ms-2" onClick = { handleLoClick }> Convert to Lowercase </button> 
        <button className = "btn btn-primary mt-2 ms-2" onClick = { handleClClick }> Clear Text</button> 
        <button className = "btn btn-primary mt-2 ms-2" onClick = { handleReClick }>Reverse String</button>  

      </div>

        <div className = "container" >
        <h2> Your Text Summary </h2> 
        <p id = "count"> {text.split(" ").length } words and { text.length } characters </p> 
        <p> { 0.08 * text.split(" ").length } Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something Above to preview it" }</p>
        </div>
        </div>
    )
}