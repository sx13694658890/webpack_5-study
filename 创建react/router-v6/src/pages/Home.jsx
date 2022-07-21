
import React ,{ useState,useCallback }from 'react'
import  LineCharts  from "../components/LineCharts"
import { render } from '@testing-library/react';

export default class Home extends React.Component{
  state={
    data:["星期一","星期5","星期6","星期8"],
    sourcedata:[1000, 1500, 2000, 3000, 2500, 1800, 1200]
  }
  
   changedata=()=>{
    console.log("进来");
    this.setState({
      sourcedata:[1000, 1500, 2000, 3000,]
    })

   
  }
 render(){
  return (
    <div>Home
      <button onClick={this.changedata.bind(this)}>change</button>
      <hr />

      <LineCharts 
        dataX={this.state.data}
        sourcedata={this.state.sourcedata}
      />
    </div>
  )
 }
  
}
