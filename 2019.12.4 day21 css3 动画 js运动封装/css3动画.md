[toc]

## 第十一天A模块笔记

### transform常用的几个值

1. 位移：translate
- 水平位移：transform:translateX(100px);
- 垂直位移：transform:translateY(100px);
- 复合位移：transform:translate(100px,200px);
- transform:translate(100vw,100vh);代表视口整屏宽度和高度。
2. 缩放：scale 
- transform:scale(x,y),x代表的是缩放宽度的x倍，y代表的是缩放高度的y倍
- transform:scale(n);代表的同时缩放宽度和高度的n倍
3. 旋转：rotate
代表旋转多少度，可以是负值，单位是deg（度）
- transform:rotateX(45deg);代表的是围绕着x轴旋转45度; 
- transform:rotateY(45deg);代表的是围绕着y轴进行旋转45度;
- transform:rotateZ(45deg);代表围绕着z轴进行旋转45度；
4. skew:倾斜
- transform:skewX(45deg); 沿着X轴倾斜
- transform:skewY(45deg); 沿着y轴倾斜
- transform:skew(10deg,15deg); 沿着x轴和y轴倾斜转换
5. transform-origin:x,y; 改变元素变形时候的作用原点。
- 水平方向：left、 center、 right；
- 垂直方向：top、center、bottom；
6. transform-style:
- flat 默认值（平面的）;
- preserve-3d;代表的是三维空间，立体的；
7. perspective 代表观察者距离舞蹈的距离，通俗可以理解为照相机的景深。例如：perspective:1600px; 它下面的元素会有一个透视的效果。

### 过渡动画

- transition 
	- 动画的属性： transition-property:height;
	- 动画执行的时间： transition-duration: 2s;
	- 运动曲线： transition-timing-function: linear;
	- 延迟： transition-delay: 1s;
	- 复合：transition:all 2s linear 1s;

#### 运动曲线

值	 描述
- linear	：
规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
- ease：
规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
- ease-in：
规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
- ease-out：
规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
- ease-in-out：
规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
- cubic-bezier(n,n,n,n)	：
在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

### animation
- animation-name	指定要绑定到选择器的关键帧的名称
- animation-duration	动画指定需要多少秒或毫秒完成
- animation-timing-function	设置动画将如何完成一个周期
	- linear 匀速 同运动曲线；
	- steps()  动画分几步完成，括号内写几就分几步。
- animation-delay	设置动画在启动前的延迟间隔。
- 动画执行的次数：animation-iteration-count 
	- 具体的数字，比如3代表就是执行3次；
	- 无限循环 infinite;
- 设置动画的状态：animation-fill-mode；
    - forwards 当动画结束，停留在最后一帧
    - backwards 在动画中有延迟的时候，设置backwards，会迅速的跑到第一桢开始执行动画
    - both:当设置的有延迟的时候，动画迅速以第一桢开始，当动画结束的时候，停留在最后一帧。
- 简写：animation:名字  执行时间  运动曲线  延迟  执行次数;
如 animation:dead  0.1s  steps(10)  infinite;

### backface visibility

