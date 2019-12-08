const $del=$('#del');
const $rename=$('#rename');
const $create=$('#create');
const $move=$('#remove');
const $moveModel=$('.modal-tree')
const $overspread=$('#overspread')
function warn(str){
    $overspread.show()
    $overspread.find('p').text(str)
    $overspread.find('button').click(function(){
        $overspread.hide()
    })
    $overspread.find('#close-warn').click(function(){
        $overspread.hide()
    })
}
let { bong,getChild,getParents,getParent}=tools
$del.click(function(){
    if(list.some(item=>item.checked)){
        let {pid}=list[0]
        // console.log(list)//当前的数据
        list.forEach(item => {
            if(item.checked){
                delete data[item.id]//删除当前选中项的id
                $checkedAll.removeClass('checked')
            }
        });
        // console.log(pid)
        // console.log(gobalPid)
        render(gobalPid);//重新渲染父级pid 里面已经没有删除的id了
        $treeMenu.children().children().append(createTree(0,true));
    }else{
        // console.log('请选择文件')
        
       
        warn('请选择一个或多个文件夹')
    }
});
$rename.click(function(){
    let reData=list.filter(item=>item.checked);//筛选出选中的文件夹
    returnval=true
    if(list.some(item=>item.checked)){
        if(reData.length===1){//如果是一个文件夹
            let $folder=$folders.find('.active');
            let $txt=$folder.find('input');
            let $span=$folder.find('span')
            $span.hide();
            $txt.css('display','block');
            $txt.select();//聚焦
            $txt.blur(function(ev){
                let val=$txt.val();
                if($span.text()===val){//如果命名重复
                    $span.show();
                    $txt.hide();
                }else{
                    if(!val){
                        warn('请输入内容');
                        $txt.val($span.text())
                        $txt.select();
                        return;
                    }
                    let {id,pid}=reData[0];
                    let siblings=list.filter(item=>item.id!=id);//找到兄弟文件夹
                    // console.log(siblings)
                    if(siblings.some(item=>item.title===val)){
                        warn('命名重复')
                        $txt.select();
                    }else{
                        data[id].title=val;
                        data[id].checked=false;//失焦的时候将 文件夹变成未选中状态
                        returnval=false;
                        // console.log(pid)
                        // console.log(gobalPid)
                        render(gobalPid)//重新渲染父级
                        $treeMenu.children().children().append(createTree(0,true));
                        // $treeMenu.children().children().append(createTree(pid))
                        return false
                    }

                }
            })

        }else{warn('只能选择一个文件夹')}
    }else{warn('请选择一个文件夹')}
    
})
//新建文件夹
$create.on('click',function(ev){
    // $folders.html('');
    returnval=true
            let $folder = $(`
            <div class="file-item  " >
            <img src="./img/wendang.jpg" alt="" />
            <span class="folder-name">新建文件夹</span>
            <input type="text"  placeholder="请输入文件名" value="新建文件夹"/>
            <i class=""></i>
            </div>
                `);
            $folder.find('span').hide()
            $folder.find('input').show()
            $folders.append($folder);
            let $txt = $folder.find('input');
            $txt.select();//选中聚焦
            $txt.blur(function () {
                checked=false;
                let val = $txt.val();
                // console.log(val)
                // console.log(list)
                let bool = list.map(item => item.title).includes(val);
                // console.log(list)
                // console.log(bool)
            
                let nval = '';
                let num = 1;
                nval = val;

                while (bool) {
                    // console.log(1)
                    let s = val.replace(/\(\d\)$/, '') + '(' + num++ + ')';

                    bool = list.map(item => item.title).includes(s);
                    nval = s;
                }
                let file_id=+new Date
                // console.log(bool)

                data[file_id]={
                    
                        "title": nval,
                        "id": file_id,
                        "pid": gobalPid,
                        "type": "file",
                        "checked":false,
                    }
                    // console.log(nval)
                    // console.log(data)
                    // console.log(data[file_id])   
                    // ev.returnValue=false
                    // returnval=true
                render(gobalPid);
                $treeMenu.children().children().append(createTree(0,true));
                returnval=false
            })
           
        })
const $modelList=$('#model_list').children()
let okcode=-1;
let that =null;
function createModelTree(num){//生成弹框里的树
    
    let ary=getChild(data,num);//获取子集
    
    if(!ary.length)return;
    let $ul=$('<ul style="padding-left:5px"></ul>');
    ary.forEach(item=>{//循环子集 有子集就用li包裹
        
        let $li=$(`
            <li>
                <div class="tree-title tree-ico">
                    <span><i></i>${item.title}</span>
                </div>
            </li> `);
            
            if(!getChild(data,item.id).length){
                $li.find('i').css('background','none');
            }//没有子集 图标不显示
            $li.off().click(function(){//点击生成的li
               
                
                let reData=list.filter(item=>item.checked);//一定要用全局的数据
                // console.log(list)
                ;//筛选出选中的数据
                
                console.log(reData.some(itm=>itm.id===item.id))
                if(reData.some(itm=>itm.id===item.id)){//如果选中的数据的id与弹框的id相等 就是移动到同一文件夹
                    okcode='error'; 
                    // return;
                }else{
                    okcode=item.id; //
                    console.log(okcode)
                }
                
                if(that){
                    that.css({background:'none'});
                }
                $(this).find('span').css({
                    background:'#ccc' //点中的文件夹的背景变成#ccc
                })
                that=$(this).find('span');
                if(this.children[0].classList.toggle('open')){
                    $(this).append(createTree(item.id))
                }else{
                    $(this).find('ul').remove();
                }
                return false;
            })
            $ul.append($li);
    })
    return $ul
}
$move.off().click(function(){
    
    let reData=list.filter(item=>item.checked);
    if(!reData.length){warn('请选择文件夹')}else{
        $moveModel.show();
        $modelList.find('ul').remove();
        // console.log(111)
        $modelList.append(createModelTree(0));
    }
    const $ok=$('.footer').find('.ok');
    const $cancel=$('.footer').find('.cancel');
    const $close=$('.modal-tree').find('.icon_close')
    console.log($ok[0])
    $ok.off().click(function(){
        console.log(111)
        if(!reData.id){
            warn('请选择目标文件夹')
            return
        }
        if(okcode==='error'){
            warn('非法操作')
            return
        }
        let id=reData[0].pid;//存一下改之前的pid
        reData.forEach(item=>{
            item.pid=okcode ;
            item.checked=false;
        })
        $treeMenu.children().children().append(createTree(0,true));
        render(id);
        
        $moveModel.hide()
        
    })
    $cancel.click(function(){
        $moveModel.hide()
    })
    $close.click(function(){
        $moveModel.hide()
    })
    
})
