import React, { Component } from 'react'

export default class DerivedFromProps extends Component {

    state={
        filename:"",
        data:"",
        num:2
    }
    static defaultProps={
        filename:Math.random()*10000
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('===++++====');
        console.log(nextProps);
        console.log(prevState);
        console.log('==+++======');
        if(nextProps.filename!==prevState.filename){
            return{
                filename:nextProps.filename,
                num:nextProps.num
            }
        }
        console.log()
        return {}
    }
    componentDidUpdate(preprops,prestate){

        console.log('===============componentDidUpdate===============');
        console.log(preprops,prestate,this.props);
        console.log('=============componentDidUpdate=============');
    }
    add(){
        this.setState((prestate)=>{
            return {
                num:prestate.num+1
            }
        })
    }
  render() {
    const { num }=this.state
    return (
        <div><button onClick={this.add.bind(this)}>add</button>
        <div>DerivedFromProps=={num}</div></div>
    )
  }
}
