import React,{ FC } from "react";
import styles from  "./index.less";


interface IProps{
    title:string;
    padding?:string;
    background?:string;
    children?:React.ReactNode;
}
export const  Block:FC<IProps>=props=>{
    return(
        <div className={styles.block}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.main} style={{padding:props.padding, background:props.background}}>
                {props.children}
            </div>
        </div>
    )
}
Block.defaultProps={
    padding:"12px 12px",
    background:"var(--adm-color-background)"
}
