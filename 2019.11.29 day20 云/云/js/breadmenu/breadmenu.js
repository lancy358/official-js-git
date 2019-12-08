
const $breadMenu=$('.bread-nav');
// let list=null;
function createMenu(id){
    $breadMenu.html('');
    let bary=getParents(id);
    // console.log(data)
    // console.log(bary)
    bary.forEach((item,i,all) => {
        // let $breadChild=null;
        if(i===all.length-1){//最后一个 用span包
            $breadChild=$(`<span>${item.title}</span>`)
        }else{//其他的用a标签包
            $breadChild=$(`<a herf="javascript:void(0)">${item.title}</a>`)
        }
        $breadChild.click(function(){//让数据中所有全选的清除
            console.log(tools.getChild(data,id))
            tools.getChild(data,id).forEach(item=>item.checked=false);
            render(item.id);//重新渲染页面
            createMenu(item.id);//递归再创建
            createTree(item.id);
        });
        $breadMenu.append($breadChild)
    });
}
createMenu(0)