import React, { Component } from 'react';
class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:1,
            ary:[1,2,3,4],
            num2:1
         };
    }
    render() {
        const {num ,ary,num2} =this.state
        let list =ary.map((item,i)=><List key={i} txt={item}/>)
        return (
           <>
                <div>父组件{num}</div>
                <hr/>
                {/* <P5child  {...{
                    pnum:num,
                    pnum2:num2,
                    pary:ary
                }}/> */}
                <P5child  
                    pnum={num}
                    pnum2={num2}
                    pary={ary}
                />
                <ul>父组件{list}</ul>

           </>
        );
    }
    
}
function List(props){//子组件List
return(<li>{props.txt}</li>)
}
function P5child({pnum,pnum2,pary}){//子组件P5child
    return (<>子组件{pnum}{pnum2}{pary} </>)
}
export default App5;