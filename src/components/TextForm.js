import React, {useState} from 'react'

export default function TextForm(prop) {
    const handlerUppercase=()=>{
        //console.log("UpperCase has been Clicked...." + text)
        const newText=text.toUpperCase()
        setText(newText)
    }

    const handlerLowercase=()=>{
        //console.log("LowerCase has been Clicked...." + text)
        const newText=text.toLowerCase()
        setText(newText)
    }

    const handlerOnChange=(event)=>{
        setText(event.target.value)
    }

    const handlertoClearText=()=>{
        setText("")
    }
    //States of TextBox
    const[text,setText]=useState("")

    let wordCount=text.split(" ").length
    let lettersCount=text.length
    let timeToRead=lettersCount*0.0008

  return (
    <>
    <h1 className="Heading">{prop.heading}</h1>
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handlerOnChange}></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlerUppercase} >Convert to UpperCase</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlerLowercase} >Convert to LowerCase</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlertoClearText} >Clear Text</button>

    <div className="container">
        <h4 style={{marginTop : 20 }} className="summary">Your Text Summary</h4>
        <p className="description">{wordCount} Words and {lettersCount} Letters</p>
        <p className="time">Time Required to read : {timeToRead.toFixed(2)} minutes </p>
    </div>
    </>
  )
}
