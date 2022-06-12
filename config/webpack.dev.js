const { resolve }=require("path") ;
const config={
   
    entry:{
        //  方案1   代码抽离
        // index:{
        //     import :resolve(__dirname,"../src/index.js"),  index   引入了lodash
        //     dependOn:"shared"
        // },
        // another:{
        //     import :resolve(__dirname,"../src/another-module.js"),  another-module 引入了lodash
        //     dependOn:"shared"
        // },
        // shared:"lib/lodash"
        index:resolve(__dirname,"../src/index.js"),
        // another:resolve(__dirname,"../src/another-module.js"),
    },
    output:{
        filename:"scripts/[name].js",
        path:resolve(__dirname,"../dist"),
        clean:true, //  清除 打包
        
        // assetModuleFileName:"./images/[name][ext]"
    }
}
const devServer={
    static:"./dist",
    port:"3000",
    hot:true,
    open:true
}

module.exports={
    mode:"development",
    ...config,
    devtool:"inline-source-map",
    devServer,
}
