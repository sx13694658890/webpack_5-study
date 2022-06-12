const requestAsyn=()=>{
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("hello promise");
        },2000)
    })
}



async function demo(){
    let msg=await requestAsyn()
    console.log(msg);
}

export default  demo