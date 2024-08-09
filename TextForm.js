import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked", + Text)
        let newText=Text.toUpperCase()
        setText(newText)
        props.showalert("Converted into uppercase","sucess")
        

    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked", + Text)
        let newText=Text.toLowerCase()
        setText(newText)
        props.showalert("Converted into lowercase","sucess")
        

    }
    const handleClearClick=()=>{
        console.log("Uppercase was clicked", + Text)
        let newText=''
        setText(newText)
        

    }
    const handleCopy = ()=>{
        var text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        
    }


    const handleExtraSpaces = ()=>{
        let newText=Text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
        
    const [Text, setText]=useState("");
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'#091e35'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control " value={Text} onChange={handleOnChange} style={{background: props.mode==='dark'?'gray':'white',
            color: props.mode==='dark'?'white':'#091e35'
        }} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn.btn.primary mx-2' onClick={handleUpClick} type="button" class="btn btn-primary mx-2">Convert to Uppercase</button>
    <button className='btn.btn.primary mx-2' onClick={handleLoClick} type="button" class="btn btn-primary mx-2">Convert to Lowercase</button>
    <button className='btn.btn.primary mx-2' onClick={handleClearClick} type="button" class="btn btn-primary mx-2">Clear text</button>
    <button className='btn.btn.primary mx-2' onClick={handleExtraSpaces} type="button" class="btn btn-primary mx-2">Remove extra spaces</button>
    <button className='btn.btn.primary mx-2' onClick={handleCopy} type="button" class="btn btn-primary mx-2">Copy text</button>
    
</div>
<div className='container my_2' style={{color: props.mode==='dark'?'white':'#091e35'}}>
    <h1>Your text summary</h1>
    <p>{Text.split(" ").length} words and {Text.length}  characters</p>
    <p>{0.008 * Text.split(" ").length}  Minutes read</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:"Enter something in the text box to preview it here"}</p>
</div>
</>
)
}
