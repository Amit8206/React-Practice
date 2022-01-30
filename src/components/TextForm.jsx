import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("HandleUpClick Botton Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to Upper Case", "success")
    }
    const handleLoClick = () => {
        // console.log("HandleUpClick Botton Clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted to Lower Case", "success")
    }
    const handleClearText = () => {
        // console.log("HandleUpClick Botton Clicked " + text)
        let newText = ""
        setText(newText)
        props.showAlert("Text Clear Successfuly", "success")
    }
    const handleCopyText = () => {
        let text = document.getElementById('myText')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied Successfully", "success")

    }
    const convertToTitlecase = () => {
        setText(text[0].toUpperCase() + text.substring(1).toLowerCase());
        props.showAlert("Text Converted 1st Char Title Case", "success")
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spacess Removed Successfully", "success")
    }




    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('');

    return (
        <>
                <div className="container my-5">

                    <h1 className='heading text-center' style={{color: props.mode==='dark'?'white':'gray'}}>{props.heading}</h1>

                    <div className="mb-3 my-3">
                        <textarea className="form-control" 
                        style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} 
                        placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Spacess</button>
                    <button className="btn btn-primary mx-2" onClick={convertToTitlecase}>1st Cap Char</button>
                </div>

                <div className="container my-5">
                    <h1 className='summary text-center text-primary'>Your Text Summary</h1>
                    <p style={{color: props.mode==='dark'?'white':'black'}} className='result text-center my-3'><b>{text.split(" ").length}</b> Words And <b>{text.length}</b> characters</p>
                    <h5 className='result text-center text-success my-3'>It Can Be Read in <b>{0.008 * text.split(" ").length}</b> Minutes... </h5>

                    <h3 className='preview my-3 text-secondary'>Preview</h3>
                    <p className='preview-text my-2' style={{color: props.mode==='dark'?'white':'black'}}>
                        {text.length>0 ? text : 'Enter Some Text in the Above box To Preview It..'}</p>
                </div>
        </>
    )
}
