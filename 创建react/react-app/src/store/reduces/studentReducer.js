import  {createSlice} from "@reduxjs/toolkit"

const studentReducer=createSlice({
    name:"student",
    initialState:{
        num:1
    },
    reducers:{
        add:(state,{payload:{data}})=>{
            
          
             state.num+=data.num
        },
        redu:(state,action)=>{
            state.num--
        },
    }
})
console.log(studentReducer);
export const {add,redu}=studentReducer.actions

export default studentReducer