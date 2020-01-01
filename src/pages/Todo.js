import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component {
    state = { 
        id: null,
        post: null
    }
    getPosts (id) {
        return axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => {
                console.log('getPosts():',res.data)
                return res.data
            })
    }

    async componentDidMount () {
        let id = this.props.match.params.id;
        const post = await this.getPosts (id);
        console.log(post)
        this.setState({ id: id, post: post })
    }
    
    render() { 
        let content = ( this.state.post )? (
            <div>
                <p>userId: { this.state.post.userId }</p>
                <h3>{ this.state.post.title }</h3>
                <p>{ this.state.post.body }</p>
            </div>
        ) : (
            <div>
                <h3>Loading Post...</h3>
            </div>
        )
        return ( 
            <div className="container">
                <h1>Todo: { this.state.id }</h1>
                { content }
            </div>
        );
    }
}
 
export default Todo;
