import React, { Component } from 'react';
class App7 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:0
         };
    }
    render() {
        const {num}=this.state
        return (
            <>
                <div>父组件</div>
                <button onClick={this.add}>{num} </button>
                <hr/>
                <P7Child 
                        pnum={num} //传数据
                        padd={this.add}//传属性
                  />
            </>
        );
    }
    add=(arg)=>{//如果不传arg 则arg是ev
        if(typeof arg==='number'){
            this.setState({num:arg})
            return
        }
        this.setState({num:++this.state.num})
    }
}
class P7Child extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:this.props.pnum
         };
    }
    render() {
        const {pnum}=this.props
        return (
            <>
            <button onClick={this.cadd}>{pnum}</button>

            <button onClick={this.add}>{this.state.num}</button>
            <button onClick={this.merge}>父级数据与自己数据一致</button>
        </>
        )
       
        
    }
    cadd=()=>{
        this.props.padd()
    }
    add=()=>{
        this.setState({num:++this.state.num})
    }
    merge=()=>{
        this.props.padd(this.state.num)//
    }
}


export default App7;