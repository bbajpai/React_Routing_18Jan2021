import React, {Component} from 'react';

class PostsItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return <div> Post List Item Page <b>{this.props.match.params.id}</b></div>
    }
}

export default PostsItem;