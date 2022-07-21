import React, { Component } from 'react'
import ReactECharts from 'echarts-for-react';
export default class componentName extends Component {
    state={
        dataX:this.props.dataX || [],
        default:"",
        sourcedata:this.props.sourcedata
    }
    static getDerivedStateFromProps(props,state){
        
            if(props.dataX!==state.default){
                console.log("zhixing");
                return{
                    default:props.dataX,
                    dataX:props.dataX
                }
            }
            if(props.sourcedata!==state.default){
                console.log("zhixingaaaa");
                return{
                    default:props.sourcedata,
                    sourcedata:props.sourcedata
                }
            }
            return null
    }
    componentDidMount(){
        console.log("_____000_____");
    }
    componentWillUnmount(){
        
        this.echartsElement.getEchartsInstance().dispose()
    }
    // componentDidUpdate(preprops,state) {
    //     const instance = this.echartsElement.getEchartsInstance();
    //     if(this.props.dataX!==state.dataX ||this.props.sourcedata!==state.sourcedata){
    //         console.log(this.props,")))))))<<<<<<",preprops,state)
    //         this.setState({
    //             dataX:this.props.dataX,
    //             sourcedata:this.props.sourcedata,
    //         })
            
    //     }
        
        
    //   }
    getOption = ()=>{
        const {dataX,sourcedata}=this.state
        let option = {
            title: {  //标题
                text: '折线图一',
                x: 'center',
                textStyle: { //字体颜色
                    color: '#ccc'
                }
            },
            tooltip:{ //提示框组件
                trigger: 'axis'
            },
            xAxis: { //X轴坐标值
                data: dataX
            },
            yAxis: {
                type: 'value' //数值轴，适用于连续数据
            },
            series : [
                {
                    name:'订单量', //坐标点名称
                    type:'line', //线类型
                    data:sourcedata //坐标点数据
                }
            ]
        }
        return option;
    }
  render() {
    return (
        <div>
        <ReactECharts ref={(e) => { this.echartsElement = e }} 
           option={this.getOption()}
           style={{ height: '200px' }}
            notMerge={true} 
            key={Date.now()}
            />
       </div>
     )
    }
}
