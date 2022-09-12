import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
 
  const [Text, setText] = useState("Enter Your text here now");

  const ChangetoUp=() =>{

     let newText=Text.toUpperCase();
     setText(newText);
     props.showalert("Text converted to Upper Case", "success");

  }

  const HandleOnChange=(event)=>{

    setText(event.target.value);

    
  }

  const ChangetoLo=() =>{

    let newText= Text.toLocaleLowerCase();
    setText(newText);
    props.showalert("Text changed to Lower Case", "success");
  }

  const Clear=()=>{

    
    setText("");
    props.showalert("Text Cleared", "success");
  }

  const Copy=() =>{

    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied to clipboard", "success");

  }

  return (
 <>
 <div className='container punk' style={{color: props.mode==='dark'?'white':'black', marginTop: "50px"}}>
  <h1 className='heading'>{props.heading}</h1>     
   <div className="mb-3">
       <label htmlFor="myBox" className="form-label">{props.label}</label>
       <textarea className="form-control" id="myBox" rows="8" onChange={HandleOnChange} value={Text}  style={{backgroundColor: props.mode==='dark'?'#84817a':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
       <button type="button" className="btn btn-primary my-4 mx-2" onClick={ChangetoUp}>Change To Upper Case</button>
       <button type="button" className="btn btn-primary my-4 mx-2" onClick={ChangetoLo}> Change To Lower Case</button>
       <button type="button" className="btn btn-primary my-4 mx-2" onClick={Clear}> Clear All Text</button>
       <button type="button" className="btn btn-primary my-4 mx-2" onClick={Copy}> Copy The Text</button>

       </div>
 </div>

 <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h3 className='heading'>{Text.length} characters are there in your input.</h3>
<p>{Text.split(" ").length} words are there in your input.</p>
<p>{Text.length * 0.008} minutes will take to read it.</p>
<h3 className='heading'>Preview</h3>
<p>{Text.length>0?Text:"Enter Your text to preview"}</p>

 </div>
 </>  
  )
}
