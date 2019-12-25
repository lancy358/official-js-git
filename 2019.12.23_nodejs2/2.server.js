const http=require('http'),
fs=require('fs'),
urlModel=require('url');
qs=require('querystring');
const app=http.createServer((req,res)=>{
    const {pathname,query}=urlModel.parse(req.url);
    let lastname=['\.js$','\.html$','\.css$','\.less$','\.jpg$'];
    let re=new RegExp(lastname.join('|'));
    if(pathname==='/'){
        let data=fs.readFileSync('www1/index.html');
        res.end(data.toString())
    }
})
let port=80;
app.listen(port);
app.on('error',(e)=>{
    console.log(e);
    if(e.code==='EADDRINUSE'){
        port++;
        console.log(port);
        app.listen(port)
    }
})