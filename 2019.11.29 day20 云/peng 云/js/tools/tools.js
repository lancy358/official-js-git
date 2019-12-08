
let tools=(function(){
    // debugger
    function getChild(data,id=0){
        if(!data[id])return null;
        let ary=Object.keys(data);
        // console.log(ary)
        return ary.filter(item=>data[item].pid===id).map(item=>data[item]);//找到一个子级
    }
    function getParent(id){
        if(data[id].pid===-1)return null;
        return data[data[id].pid]//父级的数据
    }
    function getParents(id){
        let parentData=getParent(id); //父级的数据
        let ary=[data[id]]//先把自己的数据存到ary中
        while(parentData){//一直循环到parentData为null为止
            ary.unshift(parentData);
            parentData=getParent(parentData.id)
        }
        return ary
    }
    function bong(obj,obj2){
        
        // console.log(obj,obj2)
        let {left:l,top:t,bottom:b,right:r} = obj.getBoundingClientRect();
        let {left:l2,top:t2,bottom:b2,right:r2} = obj2.getBoundingClientRect();
        if(r < l2 || b < t2 || l > r2 || t > b2){
            // console.log('没碰到');
            return false;
        }else{
            // console.log('碰到');
            return true;
        }
    }
    return {
        getChild,
        getParents,
        bong,
    }
})()