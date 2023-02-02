import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
    const handleUppClick= ()=>{
        console.log("button is clicked to change text to uppercase")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleCopyText=()=>
    {
        navigator.clipboard.writeText(text)
    }
    const handleOnChange= (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const handleLoClick=()=>{
        console.log("button is clicked to change text to lowercase")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearText=()=>{
        console.log("button is clicked to change text to lowercase")
        let newText = ''
        setText(newText)
    }
    const handleRemoveExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container my-3">
                <div>
                    <div className="mb-3">
                        <h1>{props.heading}</h1>
                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
                        <button className="btn btn-primary my-2" onClick={handleUppClick}>Convert To UpperCase</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert To LoweCase</button>
                        <button className="btn btn-primary my-2 " onClick={handleClearText}>Clear The Text Box</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                        
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Text & Character Count :</h1>
                <p>Word : { text==="" ?0 :text.trim().split(" ").length} Character : {text.length}</p>
            </div>
        </>
    );
}
