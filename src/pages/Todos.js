import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

const Todos = (props) => {
    const todoLength = props.todos.length? (`[${props.todos.length}]`) : (`[null]`)
    const todoList = props.todos.length? (
        props.todos.map( todo => {
            return (
                <Link to={'/todos/'+todo.id} key={todo.id} id={'todo_id_'+todo.id}>
                    <Card
                        bordered={false} 
                        style={{margin: "15px 0px"}}
                    >
                        <Title level={3}>{todo.title}</Title>
                        <Paragraph>{todo.body}</Paragraph>
                        <div>
                            <Text code>id: {todo.id}</Text>
                            <Text code>userId: {todo.userId}</Text>
                        </div>
                    </Card>
                </Link>
            )
        })
    ) : (
        <Card
            bordered={false}
            style={{margin: "15px 0px"}}
        >
            <div>No Records.</div>
        </Card>
    )

    return (
        <div className="container">
            <h2>Todos(Redux){todoLength}</h2>
            { todoList }
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);