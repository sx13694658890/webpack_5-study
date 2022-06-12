const { resolve }=require("path") ;
const HtmlWbpackPlugin=require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

const toml=require("toml");
const yaml=require("yaml");
const json5=require("json5");


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
const plugins=[
    new HtmlWbpackPlugin({
        filename:"index.html",
        template:resolve(__dirname,"../index.html"),
        chunkes:["index"],
        inject:"body",
        title:"webpack 5",
        
    }),
    new MiniCssExtractPlugin({
        filename:"css/[name][contenthash:5].css"
    }),
    // new CleanWebpackPlugin()
]

const moduleRule={
    rules:[
        {
            test:/\.(png|jfif)$/,
            type:"asset/resource",
            generator:{
                filename:"images/[name][ext]"
            },
            parser:{
                dataUrlCondition:{
                    maxSize:4*1024*1024
                }
            },
            
        },
        {
            test:/\.(css|less)$/,
            use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            type:"asset/resource",
            generator:{
                filename:"iconfont/[name][ext]"
            },
            // use: [
            //   {
            //     loader: 'file-loader',
            //     options: {
            //         //配置字体文件输出路径，已经文件命名规则
            //         name:'iconfont/[name].[ext]'
            //     },
            //   },
            // ],
        },
        {
            test:/\.(csv|tsv)$/,
            use:"csv-loader"
        },
        {
                test:/\.xml$/,
                use:"xml-loader"
        },
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
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"],
                    plugins:[["@babel/plugin-transform-runtime"]]
                }
            }
        }
    ]
}
// 优化
const optimization={
   
    splitChunks:{
        //chunks:"all" //  js 代码抽离  共用js代码
        cacheGroups:{
            vendor:{
                test:/[\\/]node_modules[\\/]/,
                name:"vendors",
                chunks:"all"

            }
        }
    }
}
module.exports={
        ...config,
        plugins,
        module:moduleRule, 
}
