const $del=$('#del')
const $rename=$('#rename')
const $create=$('#create')
let { bong,getChild,getParents,getParent}=tools
$del.click(function(){
    if(list.some(item=>item.checked)){
        let {pid}=list[0]
        // console.log(list)//当前的数据
        list.forEach(item => {
            if(item.checked){
                
                delete data[item.id]//删除当前选中项的id
            }
        });
        render(pid);//重新渲染父级pid 里面已经没有删除的id了
    }else{
        console.log('请选择文件')
    }
});
$rename.click(function(){
    let reData=list.filter(item=>item.checked);//筛选出选中的文件夹
    if(list.some(item=>item.checked)){
        if(reData.length===1){//如果是一个文件夹
            let $folder=$folders.find('.active');
            let $txt=$folder.find('input');
            let $span=$folder.find('span')
            $span.hide();
            $txt.css('display','block');
            $txt.select();//聚焦
            $txt.blur(function(){
                let val=$txt.val();
                if($span.text()===val){//如果命名重复
                    $span.show();
                    $txt.hide();
                }else{
                    if(!val){
                        console.log('请输入正确内容');
                        $txt.val($span.text())
                        $txt.select();
                        return;
                    }
                    let {id,pid}=reData[0];
                    let siblings=list.filter(item=>item.id!=id);//找到兄弟文件夹
                    if(siblings.some(item=>item.title===val)){
                        console.log('命名重复')
                        $txt.select();
                    }else{
                        data[id].title=val;
                        data[id].checked=false;//失焦的时候将 文件夹变成未选中状态
                        render(pid)//重新渲染父级
                    }
                }
            })

        }else{console.log('只能选择一个文件夹')}
    }else{console.log('请选择一个文件夹')}
    
})
$create.on('click',function(){
    // $folders.html('');
            let $folder = $(`
            <div class="file-item active " >
            <img src="./img/wendang.jpg" alt="" />
            <input type="text"  placeholder="请输入文件名" value="新建文件夹"/>
            <i class=""></i>
            </div>
                `);
            $folder.find('span').hide()
            // $folder.find('input').show()
            $folders.append($folder);
            let $txt = $folder.find('input');
            $txt.select();//选中聚焦
            $txt.blur(function () {
                checked=false;
                let val = $txt.val();
                console.log(list)
                let bool = list.map(item => item.title).includes(val);
                let nval = '';
                let num = 1;
                navl = val;
                while (bool) {
                    // console.log(1)
                    let s = val.replace(/\(\d\)$/, '') + '(' + num++ + ')';
                    bool = list.map(item => item.title).includes(s);
                    nval = s;
                }
                list.push(
                    {
                        title: nval,
                        id: + new Date,
                        pid: list[id].pid.id,
                        // type: "file"?,
                        checked:false
                    })
                render(list);
            })
        
        })
        
