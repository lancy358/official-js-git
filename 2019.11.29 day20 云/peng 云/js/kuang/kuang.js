
const $fBox=$('#fBox');
const $kuang= $fBox.find('.kuang');
const $fils=$fBox.find('.fils');
const $folder=$folders.find('.file-item');
let {left:left_l,top:top_t}=$fBox.offset();

$fBox.on('mousedown',function(ev){
    let $disX=ev.pageX;
    let $disY=ev.pageY;
   
    if($(ev.target).closest('.file-item').length)return;//判断当前元素的父级或者本身是不是文件夹，如果是就不让框显示出来 框不能在文件夹上画
    $kuang.show().css({
        left:($disX-left_l),
        top:($disY-top_t),
        border:'1px dashed gray'

    });
    $fBox.on('mousemove',function(ev){
        $kuang.css({
            left:Math.min(ev.pageX-left_l,$disX-left_l),
            top:Math.min(ev.pageY-top_t,$disY-top_t),
            width:Math.abs(ev.pageX-$disX),
            height:Math.abs(ev.pageY-$disY),
        })
        $.each($folder,(i,ele)=>{
            if(bong($kuang[0],ele)){
                list.forEach(item=>{
                    if(item.id===$(ele).attr('did')*1){//将当前数据的id与碰到的元素的id对比 如果相等，就当该数据的checked变为true
                       item.checked=true;
                        $(ele).find('i').addClass('checked');
                        $(ele).addClass('active');

                    }
                })
            }else{
                list.forEach(item=>{//没有碰到的勾选
                    if(item.id===$(ele).attr('did')*1){
                        item.checked=false;
                        $(ele).find('i').removeClass('checked');
                        $(ele).removeClass('active');
                    }
                })
            }
            if(list.every(item=>item.checked)){//如果全部被选中就勾选全选框
                $checkedAll.addClass('checked');
                every=true;//数据也要同步
            }else{
                $checkedAll.removeClass('checked');
                every=false;
            }
        })
        
    });
    $(document).on('mouseup',function(){
        $fBox.off('mousemove');
        $(document).off('mouseup');
        $kuang.css({
            width:0,
            height:0,
            display:'none'
        })
    })
    $(document).on('dblclick',function(){
        console.log(222)
        list.forEach(item=>item.checked=false);
        $folder.each((i,ele)=>{
            $(ele).find('i').removeClass('checked');
            $(ele).removeClass('active')
        })
        every=false;
        $checkedAll.removeClass('checked');
    })
    ev.originalEvent.returnValue=false//阻止默认行为
})
