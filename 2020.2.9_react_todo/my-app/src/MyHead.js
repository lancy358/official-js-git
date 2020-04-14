import React, { Component } from 'react';
class MyHead extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val:this.props.val//将父级的数据变成自己的
         };
    }
    render() {
        const {val}=this.state
        return (
            
                 <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={val}
                    onChange={this.changval} 
                    onKeyUp={this.add}

                />
            </header>
            
        );
    }
    changval=(ev)=>{
        let {pchangval}=this.props
        this.setState({val:ev.target.value})
        pchangval(this.state.val)//将子级的数据传给父级

    }
    add=(ev)=>{
        let {padd}=this.props
        if(ev.keyCode===13){
            padd(this.state.val)
            this.setState({val:''})
        }
    }
}

export default MyHead;