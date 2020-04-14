import React, { Component } from 'react';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:0,

         };
    }
    render() {
        const {num}=this.state
        return (
        <button onClick={this.click}>{num}</button>
        );
    }
    click=()=>{
        let num=this.state.num;
        // num++;
        // this.setState({num})
        // this.setState((prev)=>({num:prev.num+1}),()=>{
        //     console.log(1)
        // })
        this.setState(
            (prev,props)=>(
                { num:prev.num+1}
            )
        )
    }
}

export default App1;