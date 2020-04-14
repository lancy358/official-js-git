import React, { Component } from 'react';
class MyBody extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            
           
         };
    }
    render() {
        let {pary,pchecked,premove,replacetxt,pesc,all}=this.props
        
        let list=null;
        
        if(pary.length){
            list=pary.map((item)=>(<List 
               
                    key={item.id}
                    txt={item.txt}
                    checked={item.checked}
                    id={item.id}
                   
                    pchecked={pchecked}
                    premove={premove}
                    replacetxt={replacetxt}
                    pesc={pesc}
                   
               />))
        }
        return (
            <section className="main">
            <input className="toggle-all" 
            type="checkbox" 
            checked={all}
            onChange={this.Change}
            
            />
            <ul className="todo-list">
                {list}
            </ul>
        </section>
        );
    }
    Change=()=>{
        const {pallchecked}=this.props
        pallchecked()
    }
  
}
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            onoff:false,
            esc:false
         };
    }
    render() {
        const {txt,checked}=this.props
        let LiClass=checked?'completed':''
        if(this.state.onoff){
            LiClass += ' editing'
        }
        return (
            <li className={LiClass}>
                <div className="view">
                    <input className="toggle" 
                    type="checkbox" 
                    checked={checked}
                    onChange={this.change}
                    
                    />
                    <label
                    onDoubleClick={this.dbcl}
                    >{txt}</label>
                    <button 
                    className="destroy"
                    onClick={this.del}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    ref="input"
                    onBlur={this.blur}
                    onKeyUp={this.esc}
                />
            </li>
        );
    }
    change=()=>{
        let {id,pchecked}=this.props
        pchecked(id)
    }
    del=()=>{
        let {id,premove}=this.props
        // console.log(id)
        premove(id)
    }
    dbcl=()=>{
        let {onoff}=this.state
        
        this.setState({onoff:!onoff},()=>{
            this.refs.input.value=this.props.txt
            this.refs.input.select()
        })
        
    }
    blur=()=>{
        console.log(222)//再触发blur
        if(this.state.esc){
            this.setState({esc:false}) 
            return//下面的代码不运行之后内容就不会改变
        }
        
        let val=this.refs.input.value.trim()
       
        const {id,replacetxt}=this.props
        if(val){
            replacetxt(val,id)
        }
        this.setState({esc:false,onoff:false})
    }
    esc=(ev)=>{
        if(ev.keyCode===27){
          console.log(111) //先触发 esc
            this.setState({esc:true,onoff:false})
        }
       
    }
}


export default MyBody;