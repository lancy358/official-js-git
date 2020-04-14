import React, { Component } from 'react';
class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ary:['疫情无情','人有情','不出门','出门带口罩'],
            val:'',
            checked:false
         };
    }
    render() {
        const {ary ,val,checked}=this.state
        let list =ary.map((item,i)=><li key={i}>{item}</li>)
        return (
            <>
            <button onClick={this.add}>添加数据</button>
            <input type="text" ref="txt"/>
            <input type="checkbox"
                onChange={this.checkbox}
                checked={checked}
            />
            <input
            type="text"
            value={val}
            onChange={this.change}
            />
            {val}
            <ul>{list}</ul>
            </>
        );
    }
    add=()=>{
        const {ary}=this.state;
        ary.push(this.refs.txt.value)
        this.setState({ary})
    }
    checkbox=(ev)=>{
        console.log(ev.target.checked)
        this.setState({checked:ev.target.checked})
    }
    change=(ev)=>{
        this.setState({val:ev.target.value})
    }
}

export default App3;