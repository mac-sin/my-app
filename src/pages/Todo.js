import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';
import { Card, Button, Typography, Divider } from 'antd';
const { Title, Text, Paragraph } = Typography;

const Todo = (props) => {
    
    const [body, setBody] = useState('editable text...');
    const onChangeHandler = str => {
        console.log('Content change:', str);
        setBody( str );
    };

    const clickHandler = () => {
        //dispatch...
        props.deleteTodo(props.todo.id);
        props.history.push("/todos")
    }

    const todo = props.todo;
    const content = ( todo )? (
        <Card
            bordered={false} 
            style={{margin: "15px 0px"}}
            key={todo.id}
        >
            <Title level={3}>{todo.title}</Title>
            <Paragraph>{todo.body}</Paragraph>
            <Paragraph
                type="secondary"
                editable={{ onChange: onChangeHandler }}
            >
                {body}
            </Paragraph>

            <div style={{marginBottom:10}}>
                <Text code>id: {todo.id}</Text>
                <Text code>userId: {todo.userId}</Text>
            </div>
            <Divider dashed>actions</Divider>
            <Button 
                type="danger" 
                icon="close"
                onClick={clickHandler}
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