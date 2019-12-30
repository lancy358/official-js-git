const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')//下载html-webpack-plugin
let obj={
    mode:'development',
    entry:{
        index:'./wp/index.js'
    },
    devServer:{//开启开发服务
        hot:true,//热更新
        port:8080,
        open:true//自动打开
    },
    module:{//将非js文件转换为js文件
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'] //下载style-loader','css-loader'
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'file-loader',//下载file-loader
                        // options:{

                        // }
                    }
                ]
            }
        ]
    },
    plugins:[//插件
        new HtmlWebpackPlugin({ //
            template:'./wp/index.html',//可以用相对路径 也可用绝对路径
            filename:'index.html'
        })
    ]


};
module.exports=obj;