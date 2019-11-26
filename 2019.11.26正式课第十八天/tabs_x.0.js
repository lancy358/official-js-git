 class Tab{
     constructor(){
        this.box=that;//jquery对象
        this.opts={
            btns:['按钮一','按钮二','按钮三'],
            content:['1111','222','3333']
        }
     }
     init(opts){
        $.extend(true,this.opts,opts)
     }
     creatBtn(){
         this.opts.bths.forEach(item=> {
             this.box.append($(`<button class="${i===0?'active':''}">${item}</button>`))
         });
     }
     creatDiv(){
        this.opts.content.forEach(item=> {
            this.box.append($(`<div class="${i===0?'active':''}">${item}</div>`))
        });
     }
     events(){
         this.btns=this.box.find('button');
         this.divs = this.box.find('div');
         let that =this;
         this.btns.click(function(){
             $(this).addClass('active').sibling().removeClass('active');
             that.divs.eq($(this).index('button')).addClass('show').sibling().removeClass('show');

         })
     }
 }