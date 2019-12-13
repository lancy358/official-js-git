
## css权重 
       !important 10000
       style  1000
       #  100
       .  : 10
       :: targName 1
        * > 0
## 选择器
    属性选择器
        input[type="text"]{
            border:1px solid #000;
        }
    伪元素选择器
        #box3::before{
            content:"";//必须有
            display: block;
            width:20px;
            height:100px;
            background: yellow;
        }
         div[class|="a"]  class要么是a要么是a-开头的
         nth-child(n)选择父元素的第N个子元素，N是整数（1,2,3）、关键字（even、odd）、公式（2n+1），n的初始值为1.
         nth-of-type(n) 只在同一种类型的原型上查找，第n个元素
         empty  选择没有子元素的元素，并且该元素没有任何文本节点
## css3 新特性
        border-radius 四个值 左上角开始顺时针
        border-radius 二个值 对角
        border-radius / 每个值上面还有两个值
        border-radius: 2em 1em 4em / 0.5em 3em;
        等价于
        border-top-left-radius: 2em 0.5em;
        border-top-right-radius: 1em 3em;
        border-bottom-right-radius: 4em 0.5em;
        border-bottom-left-radius: 1em 3em;
        文字阴影：
        text-shadow:水平方向 垂直方向 模糊距离 颜色
        border-image：url() 30 round
        background-size:30px 或者设置cover 设置之后会跟着容器的高和宽度走；
        filter：blur(10px) 高斯模糊
## css3 3D 
        景深（透视）perspective 给父元素添加 数值越大离得越远，数值越小离得越近
        transform:translateX translateY translateZ  transform3d(X,Y,Z)
## flex 
        flex布局：弹性布局：通过父级来定义子级的排列方式（pc端高版本浏览器兼容 移动端兼容）
        display：flex；
        子元素排列方式：
        justify-content:flex-start 左对齐
        justify-content:flex-end 右对齐
        justify-content:center 居中对齐；(加上align-items 水平 垂直都居中)
        justify-content：space-between  第一个和最后一个分别顶着父级的边，中间平均分
        justify-content:space-around  平均分配剩余的空间
        justify-content: space-evenly; 间距平均分配
        换行：
        flex-wrap:wrap;换行 默认nowrap
        flex-wrap:wrap-reverse;  两行颠倒
        设定主轴
        flex-direction：row 主轴 x轴 column y轴
        flex-direction:row-reverse;X轴并翻转
        flex-direction:column-reverse; Y轴并翻转 
        多列对齐
        align-items:flex-start;默认左上对齐
        align-items:flex-end 底部对齐
        align-items:baseline  文本对齐
        align-items:stretch (没有设置高度的会被拉扯)
        多行子元素排列方式
        align-content:flex-start 默认左上贴边对齐
        align-content:flex-end 底部贴边对齐
        align-content:space-between; 上下贴边中间平分
        align-content:space-around; 平均分配剩余的空间
        align-content:space-evenly 间距平均分配
        复合样式：
        flex-flow:row wrap  默认主轴换行
        子级的属性(项目的属性)
        flex-order:0；默认为零 数值越小排在前面
        flex：1 剩余位置平均分配
        align-self  允许单个项目有自己的排列方式 默认auto与align-items 一样 没有父元素等冬雨stretch

