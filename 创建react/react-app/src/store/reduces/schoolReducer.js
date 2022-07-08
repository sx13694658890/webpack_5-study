import  {createSlice} from "@reduxjs/toolkit"

const schoolReducer=createSlice({
    name:"school",
    initialState:{
        num:1,
        name:"中心小学",
        address:"中山大街45号"
    },
    reducers:{
        changeName:(state,{payload:{data}})=>{
           state.name=data.name
        },
       
    }
})

export const {changeName}=schoolReducer.actions

export default schoolReducer