import React, { Component } from 'react';
import '../src/布局/css/index.css'
import MyHead from './MyHead'
import MyBody from './body/MyBody'
import MyFooter from './MyFooter'
class App extends Component {
  constructor(props) {
    super(props);
    let hash=window.location.hash?window.location.hash.slice(1):'/all'
    this.state = { 
      val:'',
      hash,
      bool:false,
      ary:[
        {
            id:0,
            txt:'哈哈',
            checked:true,
            onoff:false
        },
        {
            id:1,
            txt:'呵呵',
            checked:false,
            onoff:false
        }
      ]
     };
  }
  render() {
    const {hash,val,ary} =this.state
    let ary2=ary.filter(item=>{
      switch(hash){
        case '/all':
          return item
        case '/unchecked':
          return item.checked===false
        case '/checked':
          return item.checked===true  
        default  :
          return item
      }
    })
    let footer=null
    if(ary2.length){
      footer=<MyFooter 
      num={ary2.filter(item=>item.checked===false).length}
      chash={this.phash}
      hash={hash}
      />
    }
    return (
      <>
      <section className="todoapp">
        <div>
          
           <MyHead 
           val={val}
           pchangval={this.changval}//将父级的方法传给子级
           padd={this.addAry}
           
           />
           <MyBody 
           pary={ary2}
           pchecked={this.changchecked}
           all={ary2.every(item=>item.checked===true)}
           pallchecked={this.changeallchecked}
           premove={this.remove}
           replacetxt={this.replace}
           pesc={this.esc}
           />
           {footer}
           
        </div>
    </section>
      </>
    );
  }
  phash=(hash)=>{
    this.setState({hash})
  }
  changval=(str)=>{
    if(typeof(str)==='string'){
        this.setState({val:str})
        return
    }
  }
  addAry=(val)=>{  
    let {ary}=this.state
    if(val){
      ary.unshift({
        id:Date.now(),
        txt:val,
        checked:false,
        onoff:false
      })
      this.setState({ary})
    }
  }
  changchecked=(id)=>{
   
    let {ary}=this.state
    for(let i=0;i<ary.length;i++){
      if(ary[i].id===id){
        ary[i].checked=!ary[i].checked
        break
      }
    }
    this.setState({ary})
  }
  changeallchecked=()=>{
    let {bool,ary}=this.state
   this.setState({bool:!bool})
    ary.map(item=>{item.checked=bool})
   
  }
  remove=(id)=>{
    let {ary}=this.state
    ary=ary.filter(item=>
      item.id!==id
    )
    
    this.setState({ary})
  }
  replace=(val,id)=>{
    // console.log(val)
      let {ary}=this.state
      for(let i=0;i<ary.length;i++){
        if(ary[i].id===id){
          ary[i].txt=val
          break
        }
      }
      this.setState({ary})
  }
  
}

export default App;



