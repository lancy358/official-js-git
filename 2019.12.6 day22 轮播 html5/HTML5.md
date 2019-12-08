# HTML5
    SEO 使用HTML5的新添加的标签可以有助于SEO优化，目的就是让页面更有语义化
    市面上说的h5指的是移动端开发
#  标签
    nav 导航栏
    section 类似于div
    footer  页脚
    header 页头
    article 当做p标签 
    audio 视频
    video 音频
    source 兼容多个音频视频格式的配置
        ```
        <audio costrols>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3 type="audio/mpeg">
        </audio>
        ```
        costrols 控制进度条
    canvas 画图的（位图）
    svg 矢量图
#  input 表单标签 及属性
    属性：
    autofocus ->  input自动聚焦
    maxlength ->  设置最多有多少个字符
    multiple ->   可以选择多个文件（在上传的时候）
    placeholder -> 输入之前的提示 （占位符）
    type：
        number  只能显示数字，有上下箭头
        color   可以取色
        ```
        <input type="color" id="color"/>
        <button id="btn">取色</button>
        btn.onclick = function(){
            console.log(color.value);
        }
        ```
        search  可以清空的小叉
        week    小日历插件
        reset  重置（需要配合form表单用）
# 密码的显示与隐藏
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style> 
        /* background : background-color(颜色) background-image（图片） background-repeat （平铺）background-attachment（是否随文本移动） background-position（北京图片位置）;  */
        *{
            margin:0;
            padding: 0;
        }
        #box{
            display: flex;
            
            justify-content: flex-start;
            
        }
        #icon{
            width: 32px;
            height: 20px;
            border: 1px solid #ccc;

            cursor: pointer;
            background-size:20px;
            background-repeat: no-repeat;
            background-position: center center;


        }
        #txt{
            width: 68px;
            height: 20px;
            border: 1px solid #ccc;
            border-right:none;
            outline: none;
        }
        .close{
            background-image: url('./img/眼睛_闭.png');
        }
        .open{
            background-image: url('./img/眼睛_开.png');
        }
        </style>
    </head>
    <body>
        <section id="box" onmousedown="return false">
            <input type="
            password"
            autofocus
            maxlength="8"
            id="txt">
            <div id="icon" class="close"></div>
        </section>
        <script>
            txt.mousedown=function(ev){
                ev.cancellBubble=true;
            }
            icon.onclick=function(){
                if(this.classList.toggle('open')){
                    txt.type='text';
                }else{
                    txt.type='password'
                }
            }
    </script>
</body>

</html>
    ```
# 如何拿到上传文件的详细信息
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <input type="file" multiple name="" id="file" />
        <button id="btn"> 按钮</button>
        <script>
            /* 
            如何拿到用户上传的数据？
                file 控件的元素下有一个files属性，files就是上传的数据
            */
            btn.onclick=function(){
                console.log(file.files)
            }
        </script>
</body>
</html>
    ```