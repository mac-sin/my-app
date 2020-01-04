import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, } from 'antd';
import { deleteTodo } from '../actions/todoActions';

class Todo extends Component {
    clickHandler = () => {
        //dispatch...
        this.props.deleteTodo(this.props.todo.id);
        this.props.history.push("/todos")
    }

    render() { 
        const todo = this.props.todo;
        const content = ( todo )? (
            <Card
                bordered={false} 
                style={{margin: "15px 0px"}}
                key={todo.id}
            >
                <p>userId: { todo.userId }</p>
                <h3>{ todo.title }</h3>
                <p>{ todo.body }</p>
                <Button 
                    type="danger" 
                    icon="close"
                    onClick={this.clickHandler}
                >
                    Delete
                </Button>
            </Card>
        ) : (
            <div>
                <h3>Loading Post...</h3>
            </div>
        )
        return ( 
            <div className="container">
                <h1>Todo(Redux)</h1>
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

const mapDispatchToProps = ( dispatch ) => {
    return {
        deleteTodo: (id) => { dispatch(deleteTodo(id)) }
    }
}

export default connect(mapStateToPorops, mapDispatchToProps)(Todo);