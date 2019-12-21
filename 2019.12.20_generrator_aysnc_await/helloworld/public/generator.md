# Generator 
    调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是Iterator Object 遍历器对象；
    如何让Generator函数执行：
        每次调用遍历器对象的方法，就会返回一个对象，属性有value和done；
        {value:xx,done:false}，value属性表示当前内部状态的值，是yield或者return表达式后面的值，done属性是一个布尔值，表示是否遍历结束，false表示未结束，true表示 结束；
# for of
    统一的遍历 api
    一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for of循环遍历他的成员
    要遍历key->ary.keys()
    要遍历value->ary.values()
    字符串，数组，Map，Set,querySelectorAll都有Symbol.iterator
    对象没有遍历接口，但是可以添加一个
    let obj = {
        name:'小明',
        age:18,
        sex:'妹纸'
    }
    Object.prototype[Symbol.iterator] = function(){
        let ary = Object.keys(this);//['name','age','sex']
        let len = ary.length; //拿到循环的次数
        let index = 0;//从0开始循环
        let that = this;
        return {
            next(){
                if(index < len){ //只要index小于对象的keys的length就循环
                    return {
                        //把对象的key和val通过value传到外面
                        value:{
                            key:ary[index],
                            val:that[ary[index++]]
                        },
                        done:false  //循环就为false
                    }
                }else{
                    //3次循环完了，就把done设置为true
                    return {
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
        

    // console.log(['a','b'])

    let obj2 = {
        name2:'哈哈'
    }

    for(let {key,val} of obj2){
       console.log(key,val);
    }
# Generator 获取数据
    function* fn(){
        console.log('请求之前');
        let res = yield request('/sleep?user=123');
        console.log('拿到数据'+res);
        console.log('请求之后');
    }

    let f = fn();
    document.onclick = function(){
        f.next();
    }    

    

    function request(url){
        let xhr = new XMLHttpRequest;
        xhr.open('get',url);
        xhr.send();
        xhr.onload = function(){
            f.next(xhr.responseText);//里面的参数xhr.reponceText就是res
        }
    }
# aysnc await 获取数据
    document.onclick = async function fn(){
        console.log('请求之前');
        //唯一要注意的是，await后面必须是个promise对象
        let res = await fetch('/sleep?user=123').then(e=>e.text());
        console.log('拿到数据'+res);
        console.log('请求之后');
    }
