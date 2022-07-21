import React, { useRef,useState,useCallback } from 'react'
import { Navigate } from 'react-router-dom'

export default function Shop() {
  const inputText=useRef();// 
  const [inputContext,setInputContent]=useState("");
  const submitForm=useCallback(
    () => {
        console.log(inputText.current.value,"++++++");
    },
    [inputContext],
  )
  return (
    <div>
      
      Shop

      <input type="text" onChange={(e)=>setInputContent(e.target.value)}  ref={inputText} value={inputContext} />

        <br />
      <button onClick={submitForm}>
        提交
      </button>
      {/* <Navigate to="/student/1"/> */}
    </div>
  )
}
