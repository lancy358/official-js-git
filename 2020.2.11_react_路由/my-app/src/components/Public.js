import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <br />
            <Link to={{pathname:'/',search:'?to=public'}} >
            <button>去首页</button>
            </Link>
            <div>public</div> 
            <Link to="/public/1">
                <button>去第一个页面</button>
            </Link>
            <Link to="/public/2">
                <button>去第er个页面</button>
            </Link>
            <Link to="/public/3">
                <button>去第san个页面</button>
            </Link>
            </>
        );
    }
}

export default Public;