import React from 'react';
import {  useSelector ,useDispatch} from "react-redux"
import { add,redu} from "../store/reduces/studentReducer"
const Home = (props) => {
    console.log(props,"+++home+++");
    const student=useSelector(state=>state.student)
   
    const dispatch= useDispatch()
     return (
          <div>
            <h3>React redux</h3>

            <p>{student.num}</p>
            <button onClick={()=>dispatch(add({data:{
                num:1
            }}))}>+</button>&nbsp;&emsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch(redu())}>-</button>
        </div>
    );
}

export default Home;
