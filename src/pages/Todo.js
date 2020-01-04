import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    render() { 
        const todo = this.props.todo;
        const content = ( todo )? (
            <div>
                <p>userId: { todo.userId }</p>
                <h3>{ todo.title }</h3>
                <p>{ todo.body }</p>
            </div>
        ) : (
            <div>
                <h3>Loading Post...</h3>
            </div>
        )
        return ( 
            <div className="container">
                <h1>Todo(Redux): { todo.id }</h1>
                { content }
            </div>
        );
    }
}
 
const mapStateToPorops = ( state, ownProps ) => {
    let id = ownProps.match.params.id;
    return {
        todo: state.todos.find(todo => todo.id === parseInt(id))
    }
}

export default connect(mapStateToPorops)(Todo);