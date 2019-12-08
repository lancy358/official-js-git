let $treeMenu=$('.tree-menu');
function createTree(num,onoff){
    
    if(onoff){
        $treeMenu.children().children().find('ul').remove();
    }//联动移动的时候删除相应的移动项
    
    let ary=getChild(data,num);
    if(!ary.length)return;
    let  $ul=$(`<ul style="padding-left:5px"></ul>`);
    ary.forEach(item => {
        let $li=$(
            `
            <li>
                <div class="tree-title tree-ico">
                    <span><i></i>${item.title}</span>
                </div>
            </li>
            `);
            // console.log($li[0])
            if(!getChild(data,item.id).length){
                $li.find('i').css('background','none');//将文件夹的图标删除
            }
            $li.off().click(function(){
                if(this.children[0].classList.toggle('open')){//第一个参数为要在元素中移除的类名，并返回 false。如果该类名不存在则会在元素中添加类名，并返回 true。点击打开 再点击关上
                    // console.log(111)
                    $(this).append(createTree(item.id));//插入li包裹的子集
                    render(item.id);//联动渲染页面
                    createMenu(item.id);//联动面包蟹
                }else{
                    $(this).find('ul').remove()// 不再重复渲染之前的li
                }
                return false;
            })
            $ul.append($li);
    });
    return $ul;
        
}
$treeMenu.children().children().append(createTree(0));