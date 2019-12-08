const $kuang=$('.cover');
const $fils=$('.fils');
$fils.on('mousedown',function(ev){
    let $disX=ev.pageX;
    let $disY=ev.pageY;
    let {left:left_l,top:top_t}=$fils.offset();

    $kuang.css({
        left:($disX-left_l)+'px',
        top:($disY-top_t)+'px',
    });
    $(document).on('mousemove',function(ev){
        $kuang.css({
            left:Math.abs(ev.pageX-($disX-left_l))+'px',
            top:Math.abs(ev.pageY-($disY-top_t))+'px',
            width:Math.min(ev.pageX,$disX-left_l)+'px',
            height:Math.min(ev.pageY,$disY-left_l)+'px',
        })
        // $.each()
        // if(bong('$kunag',)){

        // }
    });
    $(document).on('mouseup',function(){
        $(document).off('mousemove');
        $(document).off('mouseup');
        $kuang.css({
            width:0,
            height:0,
            display:'none'
        })
    })
})