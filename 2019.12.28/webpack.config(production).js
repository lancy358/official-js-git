const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const glob = require('glob');
const PurifyCssPlugin = require('purifycss-webpack');

let obj={
    mode:'production',
    entry:{
        index:'./wp/index.js'//进口js文件
    },
    output:{
        filename:'[name].js',//出口js文件
        path:path.resolve(__dirname,'./build')//出口文件夹
    },
    module:{
        rules:[
            {
                test:/\.css$/, 
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader//压缩css
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'./css/[name].css',//压缩css后的文件名
        }),
        new HtmlWebpackPlugin({//打包输出html
            minify:{//压缩html文件
                removeComments:true,//删除注释
                collapseWhitespace:true,//删除空白文档
                minifyCSS:true//压缩内联的css
            },
            filename:'index.html',
            template:'./wp/index.html'
        }),
        new PurifyCssPlugin({
            paths: glob.sync(path.join(__dirname,'./wp/*.html'))
        }),
        new optimizeCss(),
    ]

};
module.exports=obj;
