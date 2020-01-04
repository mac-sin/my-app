import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

class Todos extends Component {
    render() { 
        console.log(this.props.todos);
        const { todos } = this.props;
        const todoList = todos.length? (
            todos.map( todo => {
                return (
                    <Card
                        bordered={false} 
                        style={{margin: "15px 0px"}}
                    >
                        <div id={todo.id} key={todo.id}>
                            <div>{todo.title}</div>
                            <div>{todo.body}</div>
                        </div>
                    </Card>

                )
            })
        ) : (
            <div>No Todos</div>
        )
        return ( 
            <div className="container">
                <h2>Todos(Redux)</h2>
                { todoList }
            </div>
         );
    }
}

const mapStateToProps = ( state ) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);