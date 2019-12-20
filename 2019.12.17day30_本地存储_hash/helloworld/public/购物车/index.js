let style=localStorage.getItem('style');
if(!style){
    fetch('index.css').then(d=>d.text()).then(d=>{
        let link=document.createElement('style');
        link.innerHTML=d;

        document.querySelector('head').append(link);
        localStorage.setItem('style',d)
    })
}else{
    let link=document.createElement('style');
    link.innerHTML=style;
    document.querySelector('head').append(link);
}
const lis=document.querySelectorAll('#oUl1 li');
//刷新页面后显示本地存储的数据
let ary=JSON.parse(localStorage.getItem('gwc'))||[];
render(ary) 
lis.forEach((ele,i)=>{
    ele.onclick=function(){
        // console.log(111)
        if(!ary.includes(this.innerText)){
            ary.push(this.innerText)
            localStorage.setItem('gwc',JSON.stringify(ary));//设置本地的存储时，会默认转字符串
            render(ary)
        }
    }
});
//联动兄弟页面
window.onstorage=function(){
    ary=JSON.parse(localStorage.getItem('gwc'))||[];
    render(ary)
}
oUl2.onclick=function(ev){//删除当前选中的li的数据
    if(ev.target.tagName==='LI'){
        ary=ary.filter(item=>item!==ev.target.innerText);
        render(ary);
        localStorage.setItem('gwc',JSON.stringify(ary))
    }
}
function render(ary){
let html=ary.map(item=>`<li>${item}</li>`).join('')
// console.log(html);

    oUl2.innerHTML=html
}