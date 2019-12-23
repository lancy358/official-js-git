const http=require('http')//引入一个http模块
let app=http.createServer(function(request,response){
    // console.log('laile')
    console.log(request.url)//'/post?user=2'
    if(request.url!=='/favicon.ico'){
        let num=(/user=(\d)/).exec(request.url.split('?')[1])
        console.log(num)//[ 'user=2', '2', index: 0, input: 'user=2', groups: undefined ]
        response.setHeader('Content-Type','text/html;charset=utf-8')
        let num1=num[1];
        if(num1==='1'){
            response.write('{"name":"男"}');
        }else if(num1==='2'){
            response.write('{"name":"zhao"}');
        }
        response.end()
    }
   
//服务器报错 TypeError: Cannot read property '1' of null 是因为Chrome浏览器的favicon的问题 http://localhost/favicon.ico 所以要做一波判断
})
app.listen(80)