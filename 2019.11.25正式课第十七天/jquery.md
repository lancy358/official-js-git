<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 
        jquery:
            是一个js的类库，他简化了DOM操作，动画操作，兼容性数据请求操作
            选择器 ：css怎么选择 jquery就怎么选择类似原生的querySelector
            $是一个函数，通过$('#box')所获取到的是一个jquery对象，因此可以用jquery的方法
                $('div') $('#ul')
                属性选择器
                $('input[type="button"]').click(function(){
                })
                $('：button').click(function(){
                })
                $('input[type!="button"]').click(function(){//除了
                })
                伪类选择器
                $(ul li:enen).css('background','green')奇数行变成红色
                $('div:eq(0)') 找第一个div
            属性操作：
                attr： ->getAttribute,setAttrbute设置属性
                removeAttr->removeAttribute 删除属性
                $('box').attr('index','0') 设置
                $('box').attr('index',) 获取
                $('box').removeAttr('index') 删除
                prop 表单状态 布尔值 表单用 
                 $(':button:eq(2)').click(function(){
                    console.log($(':checkbox').prop('checked'))
                    if($(':checkbox').prop('checked')===true){
                        $(':checkbox').attr('checked',false)
                    }else{
                        $(':checkbox').attr('checked',true)
                    }
                })
                val ->value
                html()->innerHTML
                text()->innerText
                信息发送表单
                 $('#btn').click(function(){
                    let val=$('#txt').val()
                    $('#ul').html('<li>'+val+'</li>'+$('#ul').html())
                    $('#txt').val('')
                })
            样式操作：
            -css() 设置行间样式 等同于 style
            $('box').css('width') 获取style的宽度
            $('box').css('width',200)  设置style的宽度
            $('box').css({
                'width':200,
                'background':'red',
            })  批量设置style的宽度
            $('box').hide()=>display:none; //隐藏
            $('box').show();=>display:biock;//显示
            find  找到自己
        对象的互转
            原生对象转jquery只需要$()
            const box=document.getElementById('box');
            $('#box')此后可以用jquery的方法
            $('#box').css('background','red')
            jquery对象转原生对象 $('box').get(0)||$('box'[0])//0表示索引需要转谁就写 对象的索引
        DOM 文档对象模型 
            增删改查
                添加元素${<li></li>}
                let $li=$('<li>'+ num++ +'</li>')
                append 
                $('ul').append($li).css('border','1px solid #000') css样式属于ul
                appendTo
                $li.appendTo($('ul')).css('border','1px solid #000') css样式属于li
                prepend 
                $('ul').prepend($li)//每次插入都在第一个
            关系 
            回流 重绘
            盒子模型
            事件中的this指的是原生对象
            jquery的元素都可以链式调用 

     -->
</body>
</html>