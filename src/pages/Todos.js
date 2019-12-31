import React , { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import {Row, Col, Card, Button, Typography } from 'antd';
const { Title } = Typography;

const Todos = () => {
    // set React Hook
    const [todos, setTodos] = useState([
        {id: 1, description: "aaaaaa", reporter: "John" },
        {id: 2, description: "bbbbbb", reporter: "Ming" },
        {id: 3, description: "cccccc", reporter: "Ken" },
        {id: 4, description: "dddddd", reporter: "Wing" },
    ]);

    const deleteHandler = (id) => {
        setTodos( todos.filter( todo => todo.id !== id ) )
    }
    const addHandler = (newTodo) => {
        newTodo.id = Math.random()
        setTodos( [...todos, newTodo] )
    }

    const todoList = todos.length ? (
        todos.map( todo => {
            return (
                <Col span={8} key={todo.id}>
                    <Card title="Card title" bordered={false} style={{margin: "10px 0px",}}>
                        <p>{todo.description}</p>
                        <p>{todo.reporter}</p>
                        <Button block type="danger" icon="close" onClick={()=> deleteHandler(todo.id)}>
                            Delete
                        </Button>
                    </Card>
                </Col>
            )
        })
    ) : (
        <Col span={24}>
            <Title level={3}>You have No Todo's left.</Title>
        </Col>
    )
    

    return (
        <div className="container">
            <Title>Todo list</Title>
            <Row gutter={16}>
                { todoList }
            </Row>
            <div className="divider"></div>
            <NewTodoForm addHandler={addHandler}/>
        </div>
    );
}

export default Todos;