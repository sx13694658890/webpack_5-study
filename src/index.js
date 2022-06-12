console.log("welcome webpack 5  study!!!!!!!!!!!!!!!!!!!!")



//   图片引入

import imgsrc from "./assets/111.jfif";
const img=document.createElement("img");
img.src=imgsrc;
document.body.appendChild(img);



// css  less   iconfont   引入

import "./index.css";
import "./lessindex.less";


/*

// 数据的引入

import Data from "./dataMock/data.csv";
import Notes from "./dataMock/data.xml";
import toml from "./dataMock/data.toml";
import yaml from "./dataMock/data.yaml";
import json5 from "./dataMock/data.json5";
console.log(Data); //  Array
console.log(Notes);//  object
console.log(toml);// object   json 模块
console.log(yaml);// object   json 模块
console.log(json5);// object  json 模块

*/

// 引入es6  javascript语法
 import demo from  "./utils/tool.js";

 demo()

// 引入第三方库
import _ from "lodash";

console.log(_.join([4,5,6]," "));


// 按需加载
// import "./async-module.js"

// 按需加载案例

const btn1=document.createElement("button")
const btn2=document.createElement("button")
btn1.textContent="按需加载add";
btn2.textContent="预告加载redu";

btn1.addEventListener("click",()=>{
    //   魔法注释
    import(/* webpackChunkName:'math'*/ "./utils/math.js").then(({add})=>{
       console.log(add(1,2));
        })
})
document.body.appendChild(btn1)



// 预加载


btn2.addEventListener("click",()=>{
    //   魔法注释
    import(/* webpackChunkName:'math', webpackPrefetch:true*/ "./utils/math.js").then(({redu})=>{
       console.log(redu(1,2));
        })
})
document.body.appendChild(btn2)