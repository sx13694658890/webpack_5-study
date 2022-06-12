function getModule(){
   return  import("lodash").then(({default:_})=>{
        const element=document.createElement("div")
        element.innerHTML=_.join([1,2,3]," ")
        return element
    })
}


getModule().then((element)=>{
document.appendChild(element)
})