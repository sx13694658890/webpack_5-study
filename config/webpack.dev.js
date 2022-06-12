const { resolve }=require("path") ;
const HtmlWbpackPlugin=require("html-webpack-plugin");
console.log("aaaaaaaaaaaa",resolve(__dirname))
const config={
    mode:"none",
    entry:{
        index:resolve(__dirname,"../src/index.js")
    },
    output:{
        filename:"[name][chunkhash:5].js",
        path:resolve(__dirname,"../dist"),
        clean:true
    }
}
const plugins=[
    new HtmlWbpackPlugin({
        filename:"[name].html",
        publicPath:"/",
        template:resolve(__dirname,"../index.html"),
        chunkes:["index"],
        inject:"body",
        title:"webpack 5"
    })
]

module.exports={
    ...config,
    plugins

}