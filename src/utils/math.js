import { _ } from "core-js"

const  add=(x,y)=>{
    return x+y
}


const  redu=(x,y)=>{
    return x-y
}


export  function numTowORD(num){
    return _.reduce(numRef,(accum,ref)=>{
        return ref.num===num?ref.word:accum
    })
}