// console.log(data)
const $folders = $('.folder');
const $none = $('.none');
const $checkedAll = $('.top_l7')
function render(num = 0) {
    $('#box').html('')
    let d=tools.getChild(data,num);
    // console.log(d)
    list=d;
    if(!d.length){
        $none.show();
        return
    }
    $none.hide()
    let every=true;
    $.each(d, (i, item) => {
        if(!item.checked){
            every=false;
            $checkedAll.find('i').removeClass('checked');
        }
        const {id,title,checked}=item;
        let $folders = $
            (`
            <div class="folder ${checked?'active':''}" did="${id}">
                <i class="${checked ? 'checked':''}"></i>
                <img src="./img/wendang.jpg" alt="" />
                <p class="folder-name">${title}</p>
                <input type="text" class="editor" value="${title}"/>
            </div>
            `)
        let $img=$folders.find('img');
        let $i=$folders.find('i');
        $i.click(function(){
            console.log(111)
            data[id].checked=!data[id].checked//将数据中的checked值取反
            render(num)
        })
        $img.dblclick(function(){
            let id=$(this).parent().attr('did')*1;   
            d.forEach(item=>item.checked===false);
            $checkedAll.find(i).removeClass('checked');
            // console.log(data)
            render(id);

        })
        
        $folders.find('input').hide();
        $('#box').append($folders)
    })
    $checkedAll.off().click(function(){
            d.forEach(item=>item.checked=!every);//every之前是false  18行
            render(num)
    })
    if(every){
        $checkedAll.find('i').addClass('checked')
    }

}
render(0)
// $('.top_l0').click(function () {
//     let $folders = $(`
//         <div class="folder">
//             <img src="./img/folder-b.png">
//             <input type="text" placeholder="请设置文件名"  value="新建文件夹"/>
//         </div>
//         `);
//     $('#box').append($folders);
//     let $txt = $folder.find('input');
//     $txt.select();//选中聚焦
//     $txt.blur(function () {
//         let val = $txt.val();
//         let bool = ary.map(item => item.title).includes(val);
//         let nval = '';
//         let num = 1;
//         navl = val;
//         while (bool) {
//             // console.log(1)
//             let s = val.replace(/\(\d\)$/, '') + '(' + num++ + ')';
//             bool = ary.map(item => item.title).includes(s);
//             nval = s;
//         }
//         ary.push(
//             {
//                 title: nval,
//                 id: + new Date
//             })
//         render(ary);
//     })

// })



// $('#box').mousedown(function (ev) {

//     let { left, top } = $('#peng').offset();
//     let $X = $('#peng').get(0).disX = ev.pageX;
//     let $Y = $('#peng').get(0).disY = ev.pageY;
//     $('#peng').show()
//     $('#peng').css({
//         top: $Y + 'px',
//         left: $X + 'px'
//     })
//     $(document).mousemove(function (ev) {
//         $('#peng').css({
//             left: Math.min(ev.pageX, $X) + 'px',
//             top: Math.min(ev.pageY, $Y) + 'px'
//         })

//         $(".folder").each(function () {

//             if (bong($('#peng')[0], $(this)[0])) {
//                 $(this).css('background', 'pink')
//             } else {
//                 $(this).css('background', '')
//             }
//         });

//         $('#peng').css({
//             width: Math.abs(ev.pageX - $X) + 'px',
//             height: Math.abs(ev.pageY - $Y) + 'px'
//         })
//     })
//     $(document).mouseup(function () {
//         $('#peng').hide();
//         $('#peng').css({
//             width: 0,
//             height: 0,
//         });
//         $(document).off('mousemove')
//         $(document).off('mouseup')
//     })
//     // ev.preventDefault();

// })