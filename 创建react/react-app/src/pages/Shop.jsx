import React from 'react'
import { useGetSutdentQuery } from '../store/reduces/rtk-query'

export default function Shop() {


    const {data,isSuccess,isLoading}=useGetSutdentQuery(null,{
        selectFromResult:result=>{

        },
        pollingInterval:0,
        skip:false,
        refetchOnMountOrArgChange:true,
        
    })
  return (
    <div>
        {
            isLoading&&<div>数据加载中。。。</div>
        }
        </div>
  )
}
