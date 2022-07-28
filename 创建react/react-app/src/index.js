import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./store"
document.documentElement.style.fontSize=100/750 +"vw";
import { lorem } from "./npm-package/utils/demo-lorem-ipsum";
import tableprops from "./npm-package/lib/create-props-table"
const Add=()=>{

    
    return(
        <div>
            <h5>lorem-ipsum</h5>
{
    lorem.generateWords(7)
}
{
    tableprops({name:{default:"string",description:"姓名",type:"string",}})()
}

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}> <Add /></Provider>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
