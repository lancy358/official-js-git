import React ,{Component}from 'react'
import  './app.css'
class App extends Component {
    constructor(){
        super();
        this.state={
            num:0,
            num1:1,
            name:'haha'
        }
    }
    render(){
        const {num,num1,name}=this.state
        return (
           
        <div>
            
            <div >{num}</div>
            <div  className="red">{name}</div>
        <button onClick={this.click}>{num1}</button>
        </div>
        )
    }
    click=()=>{//此处必须用箭头函数 this才会指向实例
        let {num1} =this.state
        num1++
        this.setState({num1})
    }
}
export default App