const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //需下载npm i html-webpack-plugin 
const obj={
    mode:'development',//开发模式
    // entry:'./1.js',//进口
    entry:{
        index:'./1.js'
    },
    // output:{//出口
    //     path:path.resolve(__dirname,'./bulid'),
    //     filename:'build.js'
    // },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'] //npm i style-loader  css-loader
            }
        ]
    },
    devServer:{ //配置服务环境
        //contentBase: "./",//本地服务器所加载的页面所在的目录
        //historyApiFallback: true,//不跳转
        //inline:true,//自动刷新
        port:8080,//d端口号
        hot:true,//热更新
        open:true,//自动打开浏览器
    },
    plugins:[//插件
        new HtmlWebpackPlugin({//解析html的插件
            template:'./index.html',//?
            filename:'index.html',
            title:'h哈哈h'
        })
    ]


}
module.exports=obj