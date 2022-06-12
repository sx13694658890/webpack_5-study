webpack 5  命令




webpack --stats  detailed




webpack 四种资源模块替换loader




asset/resource  导出一个文件

asset/inline    图片 base64 地址  dateURI

asset/source   导出源代码  

asset   对引入文件 进行auto 选择

~~~
  {
            test:/\.(png|jfif)$/,
            type:"asset/resource",
            generator:{
                filename:"./images/[name][ext]"
            },
            parser:{
                dataUrlCondition:{
                    maxSize:4*1024*1024
                }
            },
            
        },

~~~

mini-css-extraact-plugin  对css 抽离
css-minimizer-webpack-plugin  对css 压缩




iconfont 字体 配置

~~~
@font-face{
    font-family:"iconfont",
    src:url();
}



字体 iconfont 

{
            test:/\.(ttf|woff|woff2|eot|svg)$/,
            use:"file-loader?name=iconfont/[name][ext]"
        },

~~~


资源加载



加载等等有用资源数据还有   JSON  CSV TSV XML  对于NodeJS  JSON 实际内置的
CSV  TSV   XML    可以使用  csv-loader   xml-loader   加载处理  

csv文件为一个数组

xml文件为一个对象










自定义  JSON  模块 parser

toml  yaml json5      

webpack  需要配置
~~~
const toml=require("toml");
const yaml=require("yaml");
const json5=require("json5");



  {
            test:/\.toml$/,
            type:"json",
            parser:{
                parse:toml.parse            
            }  
        }, 
        {
            test:/\.yaml$/,
            type:"json",
            parser:{
                parse:yaml.parse            
            }  
        }, 
        {
            test:/\.json5$/,
            type:"json",
            parser:{
                parse:json5.parse            
            }  
        }, 
~~~


js 打包相关


babel-loader  解析ES6桥梁
 @babel/core  babel核心  
 @babel/preset-env    babel预设   一组babel 插件 集合



 regeneratorRuntime是webpack打包生成的全局辅助函数 有babel 生成   用于兼容async/await的用法

 regeneratorRuntime is not defined 这个错误显示未能正确配置babel

 需要天机以下插件配置   

 npm install @babel/runtime     这个包包含了regeneratorRuntime   运行时需要


 npm  i @babel/plugin-transform-runtime   改插件会在需要regeneratorRuntime的地址自动require导包  编译时需要 



代码的抽离


方案1    入口文件抽离公用的模块
~~~
 index:{
            import :resolve(__dirname,"../src/index.js"),  index   引入了lodash
            dependOn:"shared"
        },
        another:{
            import :resolve(__dirname,"../src/another-module.js"),  another-module 引入了lodash
            dependOn:"shared"
        },
        shared:"lib/lodash"
~~~

方案2


````

const optimization={
    minimizer:[
        new CssMinimizerWebpackPlugin()
    ],
    splitChunks:{
        chunks:"all" //  js 代码抽离  共用js代码
    }
}

````


方案3    动态导入   按需加载  需要时候加载 不需要就不加载

import（/* webpackChunkName :"" */）   自定义名字


````
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

````


预加载



/*webpackPrefetch：true*/    预加载   预获取
/*webpackPreload：true*/      和  import  懒加载类似





缓存    [name][contenthash:5]

项目部署到服务器  会缓存打包好的模块 修改代码 文件名没变 会使用本地缓存的内容  修改输出的文件名


第三方库的缓存

````

const optimization={
    minimizer:[
        new CssMinimizerWebpackPlugin()
    ],
    splitChunks:{
        //chunks:"all" //  js 代码抽离  共用js代码
        cacheGroups:{
            vendor:{
                test:/[\\/]node_modules[\\/]/, 缓存第三方库
                name:"vendors",
                chunks:"all"

            }
        }
    }
}

````



生产环境

````
package.json 
 "dev": "webpack --env development  --config ./config/webpack.dev.js  --color ",  --env 传入值
 "dev": "webpack --env development --env global=local --config ./config/webpack.dev.js  --color ", 传多个值
module.exports=(env)=>{


打印出 env 的值  
环境 { WEBPACK_BUNDLE: true, WEBPACK_BUILD: 
true, development: true }


}

````

开发环境  prodection    时候压缩js  terser  webpack 自带


 npm i terser-webpack-plugin -D