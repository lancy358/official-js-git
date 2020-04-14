import React, { Component } from 'react';
import  '../components/app.css'
class App4 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:true,
            cm:'red'
         };
    }
    render() {
        const {show,cm}=this.state
        return (
            <>
            <div style={{display:show?'block':'none'}}
            className={cm} onClick={this.click}>
                haha
            </div>
            </>
        );
        
    }
    click=()=>{
        const {show}=this.state
        show=false
        this.setState({show})
    }
}

export default App4;