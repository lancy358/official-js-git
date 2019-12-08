const $del=$('.top_l5')
const $rename=$('.top_l2')
$del.click(function(){
    if(list.some(item=>item.checked)){
        let {pid}=list[0]
        list.forEach(item => {
            if(item.checked){
                
                delete data[item.id]
            }
        });
        render(pid);
    }else{
        console.log('请选择文件')
    }
});
$rename.click(function(){
    let reData=list.filter(item=>item.checked);
    if(list.some(item=>item.checked)){
        if(reData.length===1){
            let $folder=$folders.find('.active');
            let $txt=$folder.find('input');
            let $span=$folder.find('span')
            $span.hide();
            $txt.css('display','block');
            $txt.select();
            $txt.blur(function(){
                let val=$txt.val();
                if($span.text()===val){
                    $span.show;
                    $txt.hide();
                }else{
                    if(!val){
                        console.log('请输入正确内容');
                        $txt.val($apan.text())
                        $txt.select();
                        return;
                    }
                    let {id,pid}=reData[0];
                    let siblings=list.filter(item=>item.id!=id);
                    if(siblings.some(item=>item.title===val)){
                        console.log('命名重复')
                        $txt.select();
                    }else{
                        data[id].title=val;
                        data[id].checked=false;
                        render(pid)
                    }
                }
            })

        }
    }
})