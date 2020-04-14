import React, { Component } from 'react';
class PublicId extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props.match.params)
        return (
            <>
            <div>PublicId{this.props.match.params.id}页</div>
            </>
        );
    }
}

export default PublicId;