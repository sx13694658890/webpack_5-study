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



出现的 警告   针对性能进行配置
 ````
 WARNING in asset size limit: The following asset(s) exceed the recommended size limitThis can impact web performance.
Assets:
  scripts/vendors95e20.js (1010 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
````


// 性能配置
const  performance={
    hints:false
}

提取公共的webpack配置


eval    module 会被包裹通过eval
source-map 

hidden-source-map


eval-source-map

cheap-source-map
cheap-module-source-map

htts： 由于默认配置使用的是自签名证书   所以浏览器是提示不安全的
devServer:{

    https:{
        cacert:"./server.pem",
        pfx:"./server.pfx",
        key:"./server.key",
        cert:"./server.crt",
        passphrase:"webpack-dev-server",
        requestCert:true
    }
}


http2  自带证书




eslint     扫描代码是否符合规范
npx eslint --init   安装
````
PS E:\webpack项目\webpack 5\webpack_5-study> npx eslint --init
npx: 82 安装成功，用时 23.989 秒
You can also run this command directly using 'npm init @eslint/config'.
npx: 40 安装成功，用时 12.761 秒
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:
````




git  提交时候做代码检查  husky   提交代码检查



git-hooks



cd  .git


ls -la

```
$ ls -la
total 28
drwxr-xr-x 1 sxl 197121    0 Jun 13 02:52 ./
drwxr-xr-x 1 sxl 197121    0 Jun 13 23:30 ../
-rw-r--r-- 1 sxl 197121   27 Jun 13 02:52 COMMIT_EDITMSG
-rw-r--r-- 1 sxl 197121   20 Jun 12 14:54 HEAD
-rw-r--r-- 1 sxl 197121  367 Jun 12 14:55 config
-rw-r--r-- 1 sxl 197121   73 Jun 12 11:34 description
drwxr-xr-x 1 sxl 197121    0 Jun 12 11:34 hooks/
-rw-r--r-- 1 sxl 197121 3432 Jun 13 02:52 index
drwxr-xr-x 1 sxl 197121    0 Jun 12 11:34 info/
drwxr-xr-x 1 sxl 197121    0 Jun 12 14:54 logs/
drwxr-xr-x 1 sxl 197121    0 Jun 13 02:52 objects/
drwxr-xr-x 1 sxl 197121    0 Jun 12 14:55 refs/

```


cd hooks

```
$ ls -la
total 53
drwxr-xr-x 1 sxl 197121    0 Jun 12 11:34 ./
drwxr-xr-x 1 sxl 197121    0 Jun 13 02:52 ../
-rwxr-xr-x 1 sxl 197121  478 Jun 12 11:34 applypatch-msg.sample*
-rwxr-xr-x 1 sxl 197121  896 Jun 12 11:34 commit-msg.sample*
-rwxr-xr-x 1 sxl 197121 4655 Jun 12 11:34 fsmonitor-watchman.sample*
-rwxr-xr-x 1 sxl 197121  189 Jun 12 11:34 post-update.sample*
-rwxr-xr-x 1 sxl 197121  424 Jun 12 11:34 pre-applypatch.sample*
-rwxr-xr-x 1 sxl 197121 1643 Jun 12 11:34 pre-commit.sample*
-rwxr-xr-x 1 sxl 197121  416 Jun 12 11:34 pre-merge-commit.sample*
-rwxr-xr-x 1 sxl 197121 1374 Jun 12 11:34 pre-push.sample*
-rwxr-xr-x 1 sxl 197121 4898 Jun 12 11:34 pre-rebase.sample*
-rwxr-xr-x 1 sxl 197121  544 Jun 12 11:34 pre-receive.sample*
-rwxr-xr-x 1 sxl 197121 1492 Jun 12 11:34 prepare-commit-msg.sample*
-rwxr-xr-x 1 sxl 197121 2783 Jun 12 11:34 push-to-checkout.sample*
-rwxr-xr-x 1 sxl 197121 3650 Jun 12 11:34 update.sample*


```


新建一个pre-commit     touch  pre-commit
vim  pre-commit   编辑


git config core.hooksPath  .mygithooks



husky  自动



外部扩展

externalsType: "script",
  externals: {
    jquery: ["地址", "$"],
  },


依赖图  

 webpack-bundle-analyzer   


css 模块  postCss


web works




ts 配置


ts-loader

npx tsc --init


npm webapck serve



多页面应用



tree-shaking     摇树  自动把没用的代码删掉





PWA     渐进式网络应用


workbox-webpack-plugin     离线依旧能运行

~~~~
new WorkBoxPlugin.GenerateSW({
      clientsClaim:true,  // 快速启用serverwork
      skipWaiting:true,    // 不允许使用旧的severwork
   
  })



  if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
        navigator.serviceWorker.register("/service-worker.js").then(registration=>{
            console.log("注册成功：",registration);
        }).catch(registrationError=>{
            console.log("注册失败：",registrationError);
        })
    })
    
}
~~~~
chrome://serviceworker-internals/  查看




##### shimming    预制全局变量    细颗粒度

 new webpack.ProvidePlugin({
    _:"lodash"
  })

  这样就可以在全局使用


  imports-loader    

   {
      test:require.resolve("../src/index.js"),
      use:"imports-loader?wrapper=window"
    }


exports-loader



@babel/polyfill   实现优雅降级   适应低版本浏览器
core-js@3

 use: [
        {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env",{
            targets:["last 1 versions",">1%"],
             useBuiltIns:"usage",
             corejs:3
            }]],
            plugins: [["@babel/plugin-transform-runtime"]],
          },
        },
      ],


library     


output: {
    filename: "scripts/[name].js",
    path: resolve(__dirname, "../dist"),
    clean: true, //  清除 打包
    library:"mylib"
    // assetModuleFileName:"./images/[name][ext]"
  },