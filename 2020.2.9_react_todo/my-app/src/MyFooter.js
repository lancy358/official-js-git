import React, { Component } from 'react';
class MyFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {num,hash,chash}=this.props
        return (
            <footer className="footer">
            <span className="todo-count">
                <strong>{num}</strong>
                <span>条未选中</span>
            </span>
            <ul 
                className="filters"
            >
                <li>
                    <a 
                        href="#/all" 
                        className={hash==='/all'?'selected':''}
                        onClick={()=>{chash('/all')}}
                    >全部</a>
                </li>
                <li>
                    <a 
                        href="#/unchecked" 
                        onClick={()=>{chash('/unchecked')}}
                        className={hash==='/unchecked'?'selected':''}
                    >未选中</a>
                </li>
                <li>
                    <a 
                        href="#/checked"
                        onClick={()=>{chash('/checked')}}
                        className={hash==='/checked'?'selected':''}
                       
                    >已选中</a>
                </li>
            </ul>
        </footer>
        );
    }
}

export default MyFooter;