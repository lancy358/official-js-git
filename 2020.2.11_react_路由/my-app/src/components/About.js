import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <br />
            <Link to={{pathname:'/',search:'?to=about'}}>
                <button>关于去首页</button>
            </Link>
            <div>about</div>
            </>
        );
    }
}

export default About;