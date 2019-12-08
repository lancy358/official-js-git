// console.log(data)
const $folders = $('.folders');
// const $file_item = $('.file-item');
const $checkedAll = $('#checkedAll')
const $f_empty=$('.f-empty')
let every=true
function render(num = 0) {
    // every=true;
    $folders.html('');
    let d=tools.getChild(data,num);
    // console.log(d)
    list=d;
    if(!d.length){
        $f_empty.show();
        return
    }
    $f_empty.hide()
    let every=true;
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
                <input type="text"  class="editor"/>
                <i class="${checked?'checked':''}"></i>
            </div>
            `)
        let $img=$folder.find('img');
        let $i=$folder.find('i');
        $i.click(function(){
            // console.log(111)
            data[id].checked=!data[id].checked//将数据中的checked值取反
            render(num)
        })
        $img.dblclick(function(){
            console.log(2)
            let id=$(this).parent().attr('did')*1;   
            d.forEach(item=>item.checked===false);
            $checkedAll.removeClass('checked');
            // console.log(data)
            render(id);

        })
        
        $folder.find('input').hide();
        $folders.append($folder)
    })
    $checkedAll.off().click(function(){
            if(!list.length)return //如果list是个空数组 就不用render

            d.forEach(item=>item.checked=!every);//every之前是false  18行
            render(num)
    })
    if(every){
        $checkedAll.addClass('checked')
    }

}
render(0)
