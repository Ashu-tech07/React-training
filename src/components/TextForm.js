import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';


export default function TextForm(props) {
    const [text,setText]=useState('Enter text here to convert in uppercase');

    const handleClick=()=>{
        console.log("clicked");
        const newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase !','success');
    }
    const handleLowerClick=()=>{
      
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase !','success');
    }
    const handleClearClick=()=>{
        
        const newText='';
        setText(newText);
        props.showAlert('Cleared text  !','success');
    }


    const handleOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value);
    }

    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard !','success');
    }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'dark'}}></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLowerClick} >Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick} >Clear Text</button>
            <button className='btn btn-primary mx-1 my-1 ' onClick={handleCopy} >Copy Text</button>

        </div> 
        <div className='container my-3 ' style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Number of words and Characters</h3>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.009*text.split(' ').length} minutes to read</p>
        </div>
        </>
    )
}

