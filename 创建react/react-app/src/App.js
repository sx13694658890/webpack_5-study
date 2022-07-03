import React, { useReducer,useState,useEffect,Fragment,useCallback } from "react";
// import Card from "./components/Card";
// import context from "./context/initContext";
// import Table from "./components/Table"
//  useMemo useState use
function App() {
 const [count,setCount]=useState(0)
const  reduce=(state,{type})=>{
    switch(type){
        case "a":
            return "a"
    }
}
    const [state,dispatchState]=useReducer(reduce,1)

    const handlerClick=()=>{
        setCount(count+1)
        dispatchState({type:"a"})
    }
    //  渲染完毕后进行比较
    useEffect(()=>{
        if(count===10){
            console.log("useEffect");
        }
        // 清除函数  执行useEffect前会触发
        return ()=>{

        }
    },[])
    useEffect(()=>{
           fetch(url).then(async(response)=>{
            let data=await response.json()

           }) 
    },[])
    const handleClick=useCallback(()=>{

    },[])
    return (  
       
  <div>{count}------- {state}
  <select>
    <option value="1" key="1">1</option>
    <option value="2" key="2">2</option>
    <option value="3" key="3">3</option>
  </select>
  {/* <div onClick={handlerClick}>add</div>
  <table  onClick={handleClick}></table> */}
  </div>

    )
}

export default React.memo(App);
