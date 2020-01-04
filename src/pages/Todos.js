import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';

class Todos extends Component {

    deleteHandler = (id) => {
        const postList = this.state.posts.filter( post => post.id !== id )
        this.setState({ posts: postList, hasLocals: true, localLength: postList.length })
        localStorage.setItem("posts", JSON.stringify(postList))
    }

    render() { 
        console.log(this.props.todos);
        const { todos } = this.props;
        const todoList = todos.length? (
            todos.map( todo => {
                return (
                    <Card
                        bordered={false} 
                        style={{margin: "15px 0px"}}
                        key={todo.id}
                    >
                        <div id={todo.id}>
                            <div>{todo.title}</div>
                            <div>{todo.body}</div>
                            <Link to={'/todos/'+todo.id}>
                                <Button type="primary">Detail: {todo.id}</Button>
                            </Link>
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