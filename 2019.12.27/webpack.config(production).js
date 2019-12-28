const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入压缩html插件
const miniCssPlugin=require('mini-css-extract-plugin');//引入压缩css插件

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const obj={
    mode:'production',
    entry:{
        index:'1.js'
    },
    output:{
        path:'./bulid',
        filename:'build.js',
    },
    moudle:{
        rules:[ //你要处理什么文件
            {
                test:/\.css$/,
                use:[{
                    loader:miniCssPlugin.loader
                }, 'css-loader'],
                exclude:'./node_modules'
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file_loader',//npm install file-loader --save-dev
                        options:{
                            outputPath:'img/'
                        }
                    }
                ]
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//打包html插件
            template:'./index.html',
            filename:'index.html',
            title:'哈哈',
            minify:{
                removeComments: true,//去除html中的注释
                collapseWhitespace: true,// 删除空白符与换行符
                collapseBooleanAttributes: true,////是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                removeAttributeQuotes: true,////是否移除属性的引号 默认false
            }
        }),
        new miniCssPlugin({//打包css文件
            filename:'./css/[name].css'
        }),
    ],
    optimization:{//优化
        minimizer: [//最小化
            new TerserPlugin({
                cache: true,//缓冲
                parallel: true,//并发打包,一次打包多个
                sourceMap: true,//源码调试
                terserOptions: {
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }

};
module.exports=obj