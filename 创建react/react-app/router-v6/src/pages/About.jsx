
import React ,{useEffect}from 'react'
import { Outlet, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';

export default function About(props) {

  
  
  return (
    <div>About---
    <hr />
    <button onClick={()=>nav("/shop",{
      replace:true,

    })}>跳转</button>



    <hr />
    <Outlet></Outlet>
    </div>
  )
}
