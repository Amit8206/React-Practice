import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("HandleUpClick Botton Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        // console.log("On Change")
        setText(event.target.value)
    }

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('Enter Text Here');

    return (
        <div className="container my-5">

            <h1 className='heading text-center text-secondary'>{props.heading}</h1>

            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

        </div>
    )
}
