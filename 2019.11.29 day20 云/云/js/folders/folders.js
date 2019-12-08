// console.log(data)
const $folders = $('.folders');
// const $file_item = $('.file-item');
const $checkedAll = $('#checkedAll')
const $f_empty=$('.f-empty')
const $fbox=$('#fBox')
let returnval=false //拖拽时默认行为的开关
let every=true ;//checked的初始值
let onoff=false;//联动tree和其他功能
let gobalPid=null //记录当前内容区的pid
let list =null;//记录当前最新的数据

function render(num = 0) {
    // every=true;
    $folders.html('');
    gobalPid=num//只要render就能获取这个变量
    let d=tools.getChild(data,num);
    // console.log(d)
    list=d;
    if(!d.length){
        $f_empty.show();
        return
    }
    $f_empty.hide()
    // let every=true;
    $.each(d, (i, item) => {
        if(!item.checked){
            every=false;
            $checkedAll.removeClass('checked');
        }
        const {id,title,checked}=item;
        let $folder = $
            (`
            <div class="file-item ${checked?'active':''}" did="${id}">
                <img src="./img/wendang.jpg" alt="" />
                <span class="folder-name">${title}</span>
                <input type="text"  class="editor" value=""/>
                <i class="${checked?'checked':''}"></i>
            </div>
            `)
        let $img=$folder.find('img');
        let $i=$folder.find('i');
        $i.click(function(ev){
            // console.log(111)
            data[id].checked=!data[id].checked//将数据中的checked值取反
            render(num)
            // return false
            ev.preventDefault()
        })
       
        $folder.dblclick(function(ev){
            // console.log(2)
            // let id=$(this).parent().attr('did')*1;
            let arr=getChild(data,id)   
            d.forEach(item=>item.checked===false);
            $checkedAll.removeClass('checked');
            // console.log(data)
            render(id);//递归渲染
            createMenu(id);//与bread联动
            createTree(id,onoff);//与tree联动
            
        })
        $img.mousedown(function(ev){
            return false
        })
        
        $folder.find('input').hide();
        $folders.append($folder)
    })
    $checkedAll.off().click(function(){
            if(!list.length)return //如果list是个空数组 就不用render
            d.forEach(item=>item.checked=!every);//every之前是false  18行
            every=!every
            render(num)
            // return false
    })
    if(every){
        $checkedAll.addClass('checked')
    }

}
render(0)
// $checkedAll.off().click(function(){
//     if(!list.length)return //如果list是个空数组 就不用render
//     console.log(list)
//     list.forEach(item=>item.checked=every);//every之前是false  18行
//     every=!every
//     render(gobalPid)
// })
